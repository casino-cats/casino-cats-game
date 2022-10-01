import styled from "@emotion/styled";

import logo from "../assets/logo.png";

import { TwitterIcon, MagicIcon, DiscordIcon } from "../assets/CustomIcons";

const Footer = () => {
  return (
    <Root>
      <div className="left-content">
        <img src={logo} alt="logo" />
        <p>
          © Copyright 2022 • Casino Cats <br /> All rights reserved
        </p>
      </div>

      <div className="right-content">
        <div className="social">
          <MagicIcon />
          <p>Get NFTS</p>
        </div>
        <div className="social">
          <DiscordIcon />
          <p>Discord</p>
        </div>
        <div className="social">
          <TwitterIcon />
          <p>Twitter</p>
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-top: 1px solid #111121;
  width: calc(100% - 360px);
  margin-left: auto;
  margin-right: 40px;
  height: 175px;
  padding: 40px 0;
  & > .right-content {
    display: flex;
    gap: 20px;
    & > .social {
      display: flex;
      align-items: center;
      color: #414163;
      & > svg {
        width: 20px;
        height: 20px;
      }
      & > p {
        font-weight: 700;
        margin: 0;
        margin-left: 5px;
      }
    }
  }
  & > .left-content {
    & > img {
      filter: hue-rotate(193deg);
      opacity: 0.25;
    }
    & > p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: #414163;
    }
  }
`;

export default Footer;
