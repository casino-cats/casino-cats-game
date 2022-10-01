import styled from "@emotion/styled";

import Profile from "../components/popovers/Profile";

import logo from "../assets/logo.png";
import roulette from "../assets/roulette.svg";
import coinflip from "../assets/coinflip.svg";
import crash from "../assets/crash.svg";
import solana from "../assets/solana.svg";
import wallet from "../assets/wallet.svg";

import Button from "./Button";
import { NavLink as Link } from "react-router-dom";

interface Props {
  setDeposit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setDeposit }: Props) => {
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
        <div className="balance">
          <img src={solana} alt="solana" />
          <p>1.63</p>
          <img src={wallet} alt="wallet" />
        </div>

        <Button label="Deposit" onClick={() => setDeposit(true)} />
        <Profile />
      </div>
    </Root>
  );
};

const Root = styled("div")`
  display: flex;
  width: 100%;
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
      background: #111121;
      border: none;
      border-radius: 8px;
      padding: 2px 17px 4px;
      height: 100%;
      max-height: 38px;
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
