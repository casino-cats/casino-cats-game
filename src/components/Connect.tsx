import { useEffect } from "react";

import styled from "@emotion/styled";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import toast from "react-hot-toast";

import { LOCAL_STORAGE_KEY } from "../utils/helper";
import { auth, getMe, getNonce } from "../utils/lib/mutations";
import { useStoreActions, useStoreState } from "../store/hooks";
import * as buffer from "buffer";

window.Buffer = buffer.Buffer;

const Connect = () => {
  const { user, isAuthenticated } = useStoreState((store) => store.userModel);
  const { setUser } = useStoreActions((actions) => actions.userModel);

  const { publicKey, signMessage } = useWallet();

  const handleLogin = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet first!");
      return;
    } else {
      const nonceResult = await getNonce({ publicKey: publicKey.toBase58() });
      if (nonceResult.status === "success") {
        const nonce = nonceResult.data.nonce;
        const encodedMessage = new TextEncoder().encode(
          "Authorize your wallet to play " + nonce
        );
        if (!signMessage) {
          toast.error("Please connect your wallet first!");
          return;
        }
        const signedMessage = await signMessage(encodedMessage);
        const signResult = await auth({
          publicKey: publicKey.toBytes(),
          signature: Buffer.from(signedMessage),
        });
        if (signResult.status === "success") {
          localStorage.setItem(
            LOCAL_STORAGE_KEY.AccessToken,
            signResult.data.accessToken
          );
          const authResult = await getMe();

          console.log(authResult);
          setUser({
            userName: authResult.data.user.username,
            role: authResult.data.user.role,
            avatar: authResult.data.user.avatar,
            cccBalance: authResult.data.user.cccBalance,
            email: authResult.data.user.email,
            level: authResult.data.user.level,
            walletAddress: authResult.data.user.walletAddress,
            isPrivate: authResult.data.user.isPrivate,
          });
        } else {
          toast.error(signResult.message);
        }
      } else {
        toast.error("Can not get nonce, Please try again later.");
      }
    }
  };

  useEffect(() => {
    (async () => {
      const authResult = await getMe();
      console.log(authResult);
      setUser({
        userName: authResult.data.user.username,
        role: authResult.data.user.role,
        avatar: authResult.data.user.avatar,
        cccBalance: authResult.data.user.cccBalance,
        email: authResult.data.user.email,
        level: authResult.data.user.level,
        walletAddress: authResult.data.user.walletAddress,
        isPrivate: authResult.data.user.isPrivate,
      });
    })();
  }, []);

  return (
    <>
      <Root onClick={handleLogin}>
        <p>{isAuthenticated ? "Account" : "Login"}</p>
      </Root>
      <CustomButton>
        <WalletMultiButton />
      </CustomButton>
    </>
  );
};

const CustomButton = styled("div")`
  margin-left: 5px;
  & > .wallet-adapter-button {
    display: flex;
    align-items: center;
    background: #ffc700;
    color: black;
    border: none;
    border-radius: 8px;
    padding: 2px 17px 2px;
    height: 100%;
    max-height: 38px;
    cursor: pointer;
    transition: background 333ms ease;
    &:hover {
      background: #ffac00;
    }
  }
  & > div {
    & > .wallet-adapter-button {
      display: flex;
      align-items: center;
      background: #8dff34;
      color: black;
      border: none;
      border-radius: 8px;
      padding: 2px 17px 2px;
      height: 100%;
      max-height: 38px;
      cursor: pointer;
      transition: background 333ms ease;
      &:hover {
        background: #4fd930;
      }
    }
  }
`;

const Root = styled("div")`
  display: flex;
  align-items: center;
  background: #ffc700;
  border: none;
  border-radius: 8px;
  padding: 2px 17px 5px;
  height: 100%;
  max-height: 38px;
  cursor: pointer;
  transition: background 333ms ease;
  margin-left: 5px;
  & > p {
    color: #0a0a14;
    font-size: 14px;
    font-weight: 700;
    padding: 0 6px;
  }
  &:hover {
    background: #ffac00;
  }
`;

export default Connect;
