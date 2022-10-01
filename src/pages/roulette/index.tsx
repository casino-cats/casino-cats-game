import styled from "@emotion/styled";

import Avatar from "@mui/material/Avatar";
import Countdown from "react-countdown";

import silverCoin from "../../assets/silver-coin.png";
import goldCoin from "../../assets/gold-coin.png";
import rareCoin from "../../assets/rare-coin.png";

const Roulette = () => {
  const coins = [silverCoin, goldCoin];
  const PREVIOUS_ROLLS_LENGTH = 10;

  return (
    <Root>
      <h4>Roulette</h4>
      <div className="top-stats">
        <div className="previous-rolls">
          <p>Previous Rolls</p>
          <div>
            {Array(PREVIOUS_ROLLS_LENGTH)
              .fill("t")
              .map((data, i) => {
                return (
                  <img
                    src={i % 5 === 0 ? rareCoin : coins[i % 2]}
                    alt="coin"
                    width="25"
                  />
                );
              })}
          </div>
        </div>
        <div className="last-rolls">
          <p>Last 100</p>
          <div>
            <div>
              <img src={coins[1]} alt="coin" width="25" />
              <p>50</p>
            </div>
            <div>
              <img src={rareCoin} alt="coin" width="25" />
              <p>8</p>
            </div>
            <div>
              <img src={coins[0]} alt="coin" width="25" />
              <p>42</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wheel">
        <div className="indicator" />
        <div className="wheel-container">
          {Array(40)
            .fill("t")
            .map((data, i) => (
              <img
                src={i % 12 === 0 ? rareCoin : coins[i % 2]}
                alt="coin"
                width="110"
              />
            ))}
        </div>
      </div>

      <h5>
        <Countdown
          date={Date.now() + 5000}
          intervalDelay={0}
          precision={2}
          renderer={renderer}
        />
      </h5>

      <div className="bet-actions">
        <div className="column">
          <button className="button gold">
            <img src={coins[1]} alt="coin" width="32" />
            Place Bet
            <span>Win 2X</span>
          </button>

          <div className="top-user">
            <p>Top Gold</p>
            <div className="user">
              <Avatar sx={{ width: 22, height: 22 }} />
              <div className="level">17</div>
              <div className="username">Shimsho</div>
              <div className="amount">1.71</div>
            </div>
          </div>

          <div className="users-betting">
            <div className="betting-stats">
              <div>7 players</div>
              <div className="amount">12.72</div>
            </div>

            <div className="user-list">
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <button className="button rare">
            <img src={rareCoin} alt="coin" width="32" />
            Place Bet
            <span>Win 14X</span>
          </button>

          <div className="top-user">
            <p>Top Blue</p>
            <div className="user">
              <Avatar sx={{ width: 22, height: 22 }} />
              <div className="level">17</div>
              <div className="username">Shimsho</div>
              <div className="amount">1.71</div>
            </div>
          </div>

          <div className="users-betting">
            <div className="betting-stats">
              <div>7 players</div>
              <div className="amount">12.72</div>
            </div>

            <div className="user-list">
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <button className="button">
            <img src={coins[0]} alt="coin" width="32" />
            Place Bet
            <span>Win 2X</span>
          </button>

          <div className="top-user">
            <p>Top Silver</p>
            <div className="user">
              <Avatar sx={{ width: 22, height: 22 }} />
              <div className="level">17</div>
              <div className="username">Shimsho</div>
              <div className="amount">1.71</div>
            </div>
          </div>

          <div className="users-betting">
            <div className="betting-stats">
              <div>7 players</div>
              <div className="amount">12.72</div>
            </div>

            <div className="user-list">
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
              <div className="user">
                <Avatar sx={{ width: 22, height: 22 }} />
                <div className="level">17</div>
                <div className="username">Shimsho</div>
                <div className="amount">1.71</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

interface Clock {
  seconds: number;
  milliseconds: number;
  completed: boolean;
}

const renderer = ({ seconds, milliseconds, completed }: Clock) => {
  if (completed) {
    // Render a completed state
    return <p>Rolling...</p>;
  } else {
    // Render a countdown
    return (
      <>
        Rolling in
        <span style={{ marginLeft: 5 }}>
          {seconds}.{milliseconds / 10}
        </span>
      </>
    );
  }
};

const Root = styled("div")`
  padding-bottom: 100px;
  & > h5 {
    color: #8f8faa;
    font-size: 16px;
    width: max-content;
    margin: 0 auto;
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      black 30% 70%,
      transparent 100%
    );
  }
  & > h4 {
    color: #c1c1e3;
    font-size: 24px;
  }
  & > .top-stats {
    display: flex;
    justify-content: space-between;
    & > .previous-rolls {
      & > p {
        color: #8f8faa;
        font-size: 12px;
        margin-bottom: 8px;
      }
    }
    & > .last-rolls {
      & > p {
        margin-bottom: 8px;
        color: #8f8faa;
        font-size: 12px;
        margin-bottom: 8px;
      }
      & > div {
        display: flex;
        gap: 12px;
        & > div {
          display: flex;
          align-items: center;
          & > p {
            font-weight: 700;
            font-size: 14px;
            line-height: 160%;
            color: #c1c1e3;
            margin: 0;
            margin-left: 5px;
          }
        }
      }
    }
  }
  & > .wheel {
    display: flex;
    width: 100%;
    overflow: hidden;
    margin: 40px 0;
    position: relative;
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      black 30% 70%,
      transparent 100%
    );
    & > .indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 3px;
      height: 100%;
      background: red;
      z-index: 10;
      border-radius: 10px;
    }
    & > .wheel-container {
      display: flex;
      justify-content: center;
      width: 100%;
      animation: roulette 6s ease normal forwards;
    }
  }
  & > .bet-actions {
    display: flex;
    width: 100%;
    margin-top: 40px;
    gap: 32px;
    padding: 0 200px;
    & > .column {
      display: flex;
      flex-direction: column;
      width: 100%;
      & .user {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
        font-weight: 700;
        & > .username {
          color: #c1c1e3;
        }
        & > .level {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #aa8f8f;
          width: 22px;
          height: 22px;
          font-size: 12px;
          font-weight: 700;
          border-radius: 100%;
        }
        & > .amount {
          margin-left: auto;
          color: #2dbd3b;
        }
      }
      & > .users-betting {
        & > .betting-stats {
          display: flex;
          justify-content: space-between;
          padding: 12px 16px;
          color: #8f8faa;
          font-size: 12px;
          & > .amount {
            color: #2dbd3b;
          }
        }
        & > .user-list {
          display: flex;
          flex-direction: column;
          gap: 1px;
          border-radius: 8px;
          overflow: hidden;
          & > .user {
            padding: 12px 16px;
            background: #111121;
            &:nth-child(even) {
              background: #0d0d19;
            }
          }
        }
      }
      & > .top-user {
        background: #111121;
        padding: 12px 16px;
        border-radius: 10px;
        margin: 12px 0;
        & > p {
          margin: 0;
          margin-bottom: 8px;
          color: #8f8faa;
          font-size: 12px;
        }
      }
      & > button {
        display: flex;
        align-items: center;
        background: #dadfdf1a;
        border: none;
        outline: none;
        padding: 8px 16px 8px 8px;
        border-radius: 8px;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #dadfdf;
        &.rare {
          background: rgb(129 159 255 / 10%);
          & > span {
            color: #829fff;
          }
        }
        &.gold {
          background: #ffc7001a;
          & > span {
            color: #ffc700;
          }
        }
        & > span {
          margin-left: auto;
          opacity: 0.2;
        }
        & > img {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default Roulette;
