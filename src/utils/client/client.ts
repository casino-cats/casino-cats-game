import * as anchor from "@project-serum/anchor";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  Signer,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import {
  CASINOCATS_HOUSE_WALLET,
  CASINOCATS_PROGRAM_ID,
  CCC_MINT_DEVNET,
  USDC_MINT_DEVNET,
} from "./common";
import { findATA } from "./common/accountUtils";
import {
  findCatBoxPDA,
  findCatDepositReceiptPDA,
  findCccRewardPotPDA,
  findPoolAuthorityPDA,
  findSolPotPDA,
  findUsdcRewardPotPDA,
} from "./common/pda";
import { CasinocatsProgram, IDL } from "./types/casinocatsProgram";
import { ClientType } from "./types/clientType";

const createClient = ({
  provider,
}: {
  provider: anchor.AnchorProvider;
}): ClientType => {
  const program = new anchor.Program<CasinocatsProgram>(
    IDL,
    CASINOCATS_PROGRAM_ID,
    provider
  );
  return {
    program: program,

    depositSol: async (amount: number) => {
      const txSig = await program.methods
        .depositSol(new anchor.BN(amount * LAMPORTS_PER_SOL))
        .accounts({
          payer: (program.provider as anchor.AnchorProvider).wallet.publicKey,
          houseAcc: new PublicKey(CASINOCATS_HOUSE_WALLET),
          systemProgram: SystemProgram.programId,
        })
        .rpc();
      console.log(txSig);
      return txSig;
    },

    depositUsdc: async (amount: number) => {
      const usdcDestination = await findATA(
        new PublicKey(USDC_MINT_DEVNET),
        new PublicKey(CASINOCATS_HOUSE_WALLET)
      );
      const usdcSource = await findATA(
        new PublicKey(USDC_MINT_DEVNET),
        (program.provider as anchor.AnchorProvider).wallet.publicKey
      );

      const txSig = await program.methods
        .depositUsdc(new anchor.BN(1000000 * amount))
        .accounts({
          usdcDestination: usdcDestination,
          usdcSource: usdcSource,
          usdcMint: new PublicKey(USDC_MINT_DEVNET),
          owner: new PublicKey(CASINOCATS_HOUSE_WALLET),
          payer: (program.provider as anchor.AnchorProvider).wallet.publicKey,
          tokenProgram: TOKEN_PROGRAM_ID,
        })
        .rpc();

      console.log(txSig);

      return txSig;
    },

    fetchNftListAcc: async () => {
      const accs = await program.account.nftList.all();
      return accs.map((acc) => ({
        nftListAddress: acc.publicKey.toBase58(),
        collectionName: acc.account.collectionName,
      }));
    },

    fetchAllPool: async () => {
      const poolList = await program.account.pool.all();
      return poolList.map((pool) => ({
        poolAddress: pool.publicKey.toBase58(),
        poolName: String.fromCharCode(...pool.account.poolName).replace(
          /\0/g,
          ""
        ),
        depositStartTs: pool.account.depositStartTs.toNumber(),
        depositEndTs: pool.account.depositEndTs.toNumber(),
        stakeEndTs: pool.account.stakeEndTs.toNumber(),
        numberOfCats: pool.account.numberOfCats,
        createdAt: pool.account.createdTs.toNumber(),
      }));
    },

    fetchAllCatDepositReceiptInPool: async ({ pool }) => {
      const filter = pool
        ? [{ memcmp: { offset: 8, bytes: pool.toBase58() } }]
        : [];

      try {
        const catDepositReceiptAccounts =
          await program.account.catDepositReceipt.all(filter);
        const catDepositReceiptList = Promise.all(
          catDepositReceiptAccounts.map((acc) => {
            return {
              catDepositReceiptPubkey: acc.publicKey,
              poolPubkey: acc.account.pool,
              catMint: acc.account.catMint,
              catOwner: acc.account.catOwner,
            };
          })
        );

        return catDepositReceiptList;
      } catch (_) {
        return null;
      }
    },

    depositCat: async ({ pool, nftList, catMint, catSource }) => {
      const [catBox, catBoxBump] = await findCatBoxPDA(pool, catMint);
      const [catDepositReceipt, catDepositReceiptBump] =
        await findCatDepositReceiptPDA(pool, catMint);
      const [authority, authorityBump] = await findPoolAuthorityPDA(pool);
      const signers: Signer[] = [];
      const txSig = await program.methods
        .depositCat()
        .accounts({
          pool: pool,
          owner: (program.provider as anchor.AnchorProvider).wallet.publicKey,
          authority: authority,
          catDepositReceipt: catDepositReceipt,
          catBox: catBox,
          catSource: catSource,
          catMint: catMint,
          nftList: nftList,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
      console.log(txSig);
    },

    claimCat: async ({ poolPubkey, catMint }) => {
      const [authority, authorityBump] = await findPoolAuthorityPDA(poolPubkey);
      const [catBox, catBoxBump] = await findCatBoxPDA(poolPubkey, catMint);
      const [catDepositReceipt, catDepositReceiptBump] =
        await findCatDepositReceiptPDA(poolPubkey, catMint);
      const catDestination = await findATA(
        catMint,
        (program.provider as anchor.AnchorProvider).wallet.publicKey
      );
      const [solPot, solPotBump] = await findSolPotPDA(poolPubkey);
      const [usdcRewardPot, usdcRewardPotBump] = await findUsdcRewardPotPDA(
        poolPubkey
      );
      const usdcRewardDestination = await findATA(
        new PublicKey(USDC_MINT_DEVNET),
        (program.provider as anchor.AnchorProvider).wallet.publicKey
      );
      const [cccRewardPot, cccRewardPotBump] = await findCccRewardPotPDA(
        poolPubkey
      );
      const cccRewardDestination = await findATA(
        new PublicKey(CCC_MINT_DEVNET),
        (program.provider as anchor.AnchorProvider).wallet.publicKey
      );

      const txSig = await program.methods
        .claim(solPotBump, usdcRewardPotBump, cccRewardPotBump)
        .accounts({
          pool: poolPubkey,
          owner: (program.provider as anchor.AnchorProvider).wallet.publicKey,
          authority: authority,
          catDepositReceipt: catDepositReceipt,
          catBox: catBox,
          catMint: catMint,
          catDestination: catDestination,
          solPot: solPot,
          usdcRewardPot: usdcRewardPot,
          usdcRewardDestination: usdcRewardDestination,
          usdcMint: new PublicKey(USDC_MINT_DEVNET),
          cccRewardPot: cccRewardPot,
          cccRewardDestination: cccRewardDestination,
          cccMint: new PublicKey(CCC_MINT_DEVNET),
          tokenProgram: TOKEN_PROGRAM_ID,
          associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
          rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        })
        .rpc();
      console.log(txSig);
    },
  };
};

export { createClient };
