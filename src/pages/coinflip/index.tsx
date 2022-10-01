import { useState } from "react";
import styled from "@emotion/styled";

import Button from "../../components/Button";
import Card from "./Card";

import solana from "../../assets/solana.svg";

import silverCoin from "../../assets/silver-coin.png";
import goldCoin from "../../assets/gold-coin.png";

const Coinflip = () => {
  const [coin, setCoin] = useState(false);

  return (
    <Root>
      <h3>Coinflip</h3>
      <div className="input-container">
        <div className="input-wrapper">
          <div className="input">
            <img src={solana} alt="solana" />
            <input placeholder="0.00" type="text" />
          </div>

          <div className="coins">
            <img
              className={coin ? "active" : ""}
              src={silverCoin}
              alt="coin"
              height="38"
            />
            <img
              className={!coin ? "active" : ""}
              src={goldCoin}
              alt="coin"
              height="38"
            />
          </div>

          <Button label="Create Duel" />
        </div>

        <div className="actions">
          <div>+0.01</div>
          <div>+0.01</div>
          <div>+0.01</div>
          <div>+0.01</div>
        </div>
      </div>

      <h4>Your games</h4>
      <div className="grid">
        {Array(4)
          .fill("t")
          .map((data, i) => (
            <Card />
          ))}
      </div>

      <h4>10 Active games</h4>
      <div className="grid">
        {Array(10)
          .fill("t")
          .map((data, i) => (
            <Card />
          ))}
      </div>
    </Root>
  );
};

const Root = styled("div")`
  padding-bottom: 100px;
  & > h4 {
    margin: 0;
    color: #8f8faa;
    font-weight: 500;
    font-size: 12px;
  }
  & > h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 160%;
    color: #c1c1e3;
  }
  & > .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
    margin-bottom: 60px;
  }
  & > .input-container {
    margin-bottom: 60px;
    & > .actions {
      display: none;
    }
    & > .input-wrapper {
      display: flex;
      gap: 10px;
      & .coin {
        opacity: 0.25;
        &.active {
          opacity: 1;
        }
      }
      & > .input {
        position: relative;
        & > img {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 12px;
          margin: auto 0;
        }
        & > input {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 6px 12px 5px 38px;
          gap: 81px;
          width: 276px;
          height: 38px;
          background: #0d0d19;
          border: 1px solid #111121;
          border-radius: 8px;
          &::placeholder {
            color: #c1c1e3;
            opacity: 0.2;
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export default Coinflip;
