import React from "react";
import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";

import coinBg from "../../assets/coin-bg.svg";
import solana from "../../assets/solana.svg";

import silverCoin from "../../assets/silver-coin.png";
import goldCoin from "../../assets/gold-coin.png";

const Card = () => {
  const coins = [silverCoin, goldCoin];

  return (
    <Root>
      <div className="preview-flip">
        <img
          className="coin"
          src={coins[Math.floor(Math.random() * 3)]}
          alt=""
          height="120"
        />
        <div className="bottom-values">
          <div className="value win">
            <img src={solana} alt="solana" />
            1.73
          </div>
          <div className="value lose">
            <img src={solana} alt="solana" />
            1.73
          </div>
        </div>
      </div>
      <div className="bottom-actions">
        <div className="user">
          <div className="avatar">
            <Avatar
              sx={{
                border: "2px solid #111121",
                boxShadow: "0 0 0 2px #AA8F8F",
              }}
              src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fwww.arweave.net%2Fmv3TwISvD9puJa15KZSFWxA5hCV-dbfvOfDxGK8-i0I%3Fext%3Dpng"
            />
            <img src={silverCoin} alt="coin" width="22" />
          </div>
          <p>Shimsho</p>
        </div>

        <div className="user" style={{ opacity: 0.25 }}>
          <p>Shimsho</p>
          <div className="avatar">
            <Avatar
              sx={{
                border: "2px solid #111121",
                boxShadow: "0 0 0 2px #AA8F8F",
              }}
              className="avatar-el flip-x"
              src="https://img.seadn.io/files/abb825f65f440dea6d492d6872c36fcd.png?auto=format&fit=max&w=384"
            />
            <img className="left" src={goldCoin} alt="coin" width="22" />
          </div>
        </div>
      </div>
      <div className="provably">
        <p className="info">Round 1232, Hash: 82d5a36892...33e2235954</p>
        <p className="copy">Copy</p>
      </div>
    </Root>
  );
};

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: calc(100% / 4 - 12px);
  height: 254px;
  background: #0d0d19;
  border-radius: 10px;
  overflow: hidden;
  & > .provably {
    display: flex;
    gap: 8px;
    justify-content: center;
    background: #111121;
    & > p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 120%;
      color: #8f8faa;
      margin-top: 0;
      opacity: 0.5;
      &.copy {
        transition: 333ms ease;
        cursor: pointer;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  & > .preview-flip {
    display: flex;
    height: calc(100% - 70px);
    background-image: url(${coinBg});
    background-size: 134px 134px;
    background-repeat: no-repeat;
    background-position: center;
    padding: 16px;
    position: relative;
    & > .coin {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }
    & > .bottom-values {
      display: flex;
      justify-content: space-between;
      margin-top: auto;
      width: 100%;
      & > .value {
        display: flex;
        align-items: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #c1c1e3;
        background: rgba(193, 193, 227, 0.1);
        border-radius: 8px;
        padding: 4px 8px;
        width: max-content;
        &.win {
        }
        &.lose {
          opacity: 0.25;
        }
        & > img {
          margin-right: 5px;
        }
      }
    }
  }
  & > .bottom-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background: #111121;
    padding: 0 12px;
    & > .user {
      display: flex;
      & > .avatar {
        position: relative;
        & > .flip-x {
          transform: scaleX(-1);
        }
        & > img {
          position: absolute;
          bottom: 0;
          right: -5px;
          &.left {
            right: unset;
            left: -5px;
          }
        }
      }
      & > p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #c1c1e3;
        margin: auto 0;
        padding: 0 10px;
        & > .level {
          font-size: 10px;
          background: white;
          padding: 3px 3px;
          border-radius: 100%;
        }
      }
    }
  }
`;

export default Card;
