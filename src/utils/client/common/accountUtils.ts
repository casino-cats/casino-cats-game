import { Keypair, PublicKey } from "@solana/web3.js";
import {
  AccountInfo,
  ASSOCIATED_TOKEN_PROGRAM_ID,
  MintInfo,
  Token,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";

export async function findATA(
  mint: PublicKey,
  owner: PublicKey
): Promise<PublicKey> {
  return Token.getAssociatedTokenAddress(
    ASSOCIATED_TOKEN_PROGRAM_ID,
    TOKEN_PROGRAM_ID,
    mint,
    owner
  );
}
