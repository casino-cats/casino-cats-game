import * as anchor from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { CasinocatsProgram } from "./casinocatsProgram";

type PoolType = {
  poolAddress: string;
  poolName: string;
  depositStartTs: number;
  depositEndTs: number;
  stakeEndTs: number;
  numberOfCats: number;
  createdAt: number;
};

type CatDepositReceiptType = {
  catDepositReceiptPubkey: PublicKey;
  poolPubkey: PublicKey;
  catMint: PublicKey;
  catOwner: PublicKey;
};

type NftListType = {
  nftListAddress: string;
  collectionName: string;
};

type ClientType = {
  program: anchor.Program<CasinocatsProgram>;
  fetchAllPool: () => Promise<PoolType[]>;

  fetchNftListAcc: () => Promise<NftListType[]>;

  fetchAllCatDepositReceiptInPool: ({
    pool,
  }: {
    pool: PublicKey;
  }) => Promise<CatDepositReceiptType[] | null>;

  depositSol: (amount: number) => Promise<any>;

  depositUsdc: (amount: number) => Promise<any>;

  depositCat: ({
    pool,
    nftList,
    catMint,
  }: {
    pool: PublicKey;
    nftList: PublicKey;
    catMint: PublicKey;
    catSource: PublicKey;
  }) => Promise<any>;
  claimCat: ({
    poolPubkey,
    catMint,
  }: {
    poolPubkey: PublicKey;
    catMint: PublicKey;
  }) => Promise<any>;
};

export type { ClientType, PoolType, NftListType };
