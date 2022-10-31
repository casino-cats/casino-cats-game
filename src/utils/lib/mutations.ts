import { fetcher, patcher } from "./fetcher";

export const auth = (body: { publicKey: Uint8Array; signature: Buffer }) => {
  return fetcher("auth/signin", body);
};

export const getNonce = (body: { publicKey: string }) => {
  return fetcher("auth/nonce", body);
};

export const getMe = () => {
  return fetcher("user/me");
};

export const getAllTransactions = () => {
  return fetcher("transaction/all");
};

export const rouletteGameStates = () => {
  return fetcher("transaction/all");
};

export const coinflipGameStates = () => {
  return fetcher("transaction/all");
};

export const crashGameStates = () => {
  return fetcher("transaction/all");
};

export const chatHistory = () => {
  return fetcher("chat/history");
};

export const depositTransaction = (body: {
  coinType: number;
  amount: number;
  signature: string;
}) => {
  return fetcher("transaction/deposit", body);
};

export const withdrawTransaction = (body: {
  coinType: number;
  amount: number;
}) => {
  return fetcher("transaction/withdraw", body);
};

export const redeemTransaction = (body: { code: string }) => {
  return fetcher("transaction/redeem", body);
};

export const updateUsername = (body: { username: string }) => {
  return patcher("user/profile/username", body);
};

export const updateAvatar = (body: { avatar: string }) => {
  return patcher("user/profile/avatar", body);
};

export const updateEmail = (body: { email: string }) => {
  return patcher("user/profile/email", body);
};

export const updatePrivate = (body: { isPrivate: string }) => {
  return patcher("user/profile/private", body);
};

export const updateSelfExclude = (body: { days: number }) => {
  return fetcher("user/self-exclude", body);
};

export const coinflipCreate = (body: {
  creatorChosenSide: number;
  coinType: number;
  betAmount: number;
}) => {
  return fetcher("coinflip/create", body);
};

export const coinflipAccept = (body: { roundId: number }) => {
  return fetcher("coinflip/accept", body);
};

export const coinflipCallBot = (body: { roundId: number }) => {
  return fetcher("coinflip/callBot", body);
};

export const chatSendMessage = (body: { message: string }) => {
  return fetcher("chat/new", body);
};
