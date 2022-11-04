import { useState } from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import { useStoreState } from "../store/hooks";

import Popup from "../components/popovers/Popup";
import Profile from "../components/popovers/Profile";

import logo from "../assets/logo.png";
import roulette from "../assets/roulette.svg";
import coinflip from "../assets/coinflip.svg";
import crash from "../assets/crash.svg";
import solana from "../assets/solana.svg";
import wallet from "../assets/wallet.svg";

import btc from "../assets/bitcoin-btc-logo.svg";
import eth from "../assets/ethereum-eth-logo.svg";
import sol from "../assets/solana-sol-logo.svg";
import usdc from "../assets/usd-coin-usdc-logo.svg";
import usdcGrey from "../assets/usd-coin-usdc-logo-grey.svg";

import Button from "./Button";
import Connect from "./Connect";
import { NavLink as Link } from "react-router-dom";

interface Props {
  setDeposit: React.Dispatch<React.SetStateAction<boolean>>;
  setWallet: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setDeposit, setWallet }: Props) => {
  const [coin, setCoin] = useState(0);
  const { user, isAuthenticated } = useStoreState((store) => store.userModel);

  return (
    <Root>
      <img className="logo" src={logo} alt="logo" />

      <Link
        to="coinflip"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <img src={coinflip} alt="coinflip" />
        <p>Coinflip</p>
      </Link>
      <Link
        to="roulette"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <img src={roulette} alt="roulette" />
        <p>Roulette</p>
      </Link>

      <div className="account">
        <div className="balance" onClick={() => setWallet(true)}>
          <Popup
            placement="bottom-start"
            button={
              <div style={{ paddingTop: 5 }}>
                {coin === 0 && <img src={solana} alt="solana" width="20" />}
                {coin === 1 && <img src={usdcGrey} alt="solana" width="20" />}
              </div>
            }
          >
            <Coins>
              <div onClick={() => setCoin(0)}>
                <img src={sol} alt="sol" width="20" />
                SOL
              </div>
              <div onClick={() => setCoin(1)}>
                <img src={usdc} alt="sol" width="20" />
                USDC
              </div>
            </Coins>
          </Popup>
          <p>{user.cccBalance?.toFixed(2) ?? "0.00"}</p>
          <img src={wallet} alt="wallet" />
        </div>

        <Button label="Deposit" onClick={() => setDeposit(true)} />
        {!isAuthenticated ? (
          <Connect />
        ) : (
          <Popup
            placement="bottom-end"
            button={
              <>
                <Avatar
                  src={user.avatar}
                  className="avatar"
                  sx={{
                    border: "2px solid #111121",
                    boxShadow: "0 0 0 2px #AA8F8F",
                    marginLeft: `8px`,
                  }}
                />
                <p className="level">{user.level}</p>
              </>
            }
          >
            <Profile />
          </Popup>
        )}
      </div>
    </Root>
  );
};

const Coins = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 114.2px;
  background: white;
  margin-left: -17px;
  background: transparent;
  border-radius: 8px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgb(22 22 40);
    border-radius: 4px;
    color: white;
    text-align: center;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: 700;
    &:hover {
      background: rgb(24 24 42);
    }
  }
`;

const Root = styled("div")`
  display: flex;
  width: 100%;
  @media screen and (max-width: 1550px) {
    padding: 0 50px;
  }
  & > .nav-link {
    text-decoration: none;
    & > img {
      filter: hue-rotate(193deg);
      opacity: 0.25;
    }
  }
  & > .logo {
    margin: 20px 0;
    margin-right: auto;
    width: auto;
    height: 32px;
  }
  & > .account {
    display: flex;
    margin: auto 0;
    margin-left: auto;
    align-items: center;
    & > .avatar {
      height: 38px;
      width: 38px;
      margin-left: 5px;
    }
    & > .balance {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #111121;
      border: none;
      border-radius: 8px;
      padding: 2px 17px 4px;
      height: 100%;
      max-height: 38px;
      cursor: pointer;
      margin-right: 5px;
      & > p {
        color: #c1c1e3;
        font-size: 14px;
        font-weight: 700;
        padding: 0 6px;
      }
    }
  }
  & > a {
    display: flex;
    align-items: center;
    color: #414163;
    margin: 0 25px;
    border-top: 3px solid transparent;
    transition: border-top 200ms ease;
    &.active {
      color: #ffc700;
      border-top: 3px solid #ffc700;
      & > img {
        filter: hue-rotate(0deg);
        opacity: 1;
      }
    }
    & > img {
      width: 20px;
      margin-right: 9px;
    }
    & > p {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default Header;
