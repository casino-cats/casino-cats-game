import { useState } from "react";
import styled from "@emotion/styled";

import { Transition, Popover, Switch } from "@headlessui/react";
import { usePopper } from "react-popper";

import Avatar from "@mui/material/Avatar";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>();
  const [popperElement, setPopperElement] = useState<any>();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary: "clippingParents",
        },
      },
      {
        name: "flip",
        options: {
          allowedAutoPlacements: ["bottom-end"],
          fallbackPlacements: ["bottom-end", "top-start"],
          altBoundary: true,
        },
      },
      {
        name: "offset",
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  return (
    <Popover as={Root} className="relative">
      <Popover.Button ref={setReferenceElement} className="button">
        <Avatar
          className="avatar"
          sx={{
            border: "2px solid #111121",
            boxShadow: "0 0 0 2px #AA8F8F",
          }}
        />
        <p className="level">17</p>
      </Popover.Button>

      <Transition
        className="panel"
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-0"
        enterTo="opacity-100 -translate-y-8"
        leave="ease-in duration-300"
        leaveFrom="opacity-100 -translate-y-8"
        leaveTo="opacity-0 translate-y-0"
      >
        <Popover.Panel
          ref={setPopperElement}
          className="panel-container"
          style={styles.popper}
          {...attributes.popper}
        >
          <Avatar
            sx={{
              width: 64,
              height: 64,
            }}
          />
          <div className="username">
            <div className="name">Entity</div>
            <div className="level">17</div>
          </div>

          <button>Edit Profile</button>

          <div className="total-wagered">
            <div className="title">Total Wagered</div>
            <div className="content">
              <div className="chips">
                <div className="active chip">All</div>
                <div className="chip">Coinflip</div>
                <div className="chip">Roulette</div>
                <div className="chip">+3</div>
              </div>
              <h1>0.00</h1>
            </div>
            <div className="private-profile">
              <p>Private Profile</p>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`switch ${enabled ? "active" : ""}`}
              >
                <span className={`switch-icon ${enabled ? "active" : ""}`} />
              </Switch>
            </div>
          </div>

          <div className="self-exclude">
            <div className="title">Self Exclude</div>
            <div className="content">
              <p>
                If you are feeling unwell, it might be good to take a break.
              </p>
              <button>Take a break for 7 days</button>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

const Root = styled("div")`
  & > .button {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    & > .level {
      position: absolute;
      bottom: -2px;
      right: -2px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #aa8f8f;
      width: 20px;
      height: 20px;
      font-size: 12px;
      font-weight: 700;
      border-radius: 100%;
      color: #0d0d19;
      margin-bottom: 0;
    }
  }
  & > .panel {
    position: absolute;
    z-index: 10;
    & > .panel-container {
      display: flex;
      flex-direction: column;
      background: #0d0d19;
      width: 320px;
      border-radius: 10px;
      margin-top: 12px;
      margin-right: -40px;
      overflow: visible;
      position: relative;
      padding: 24px;
      & > .total-wagered {
        & > .title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 160%;
          color: #8f8faa;
          margin-bottom: 8px;
          padding: 0 12px;
        }
        & > .content {
          background: #111121;
          padding: 16px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          & > h1 {
            margin: 0;
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 160%;
            color: #c1c1e3;
          }
          & > .chips {
            display: flex;
            font-size: 14px;
            gap: 4px;
            margin-bottom: 8px;
            & > .chip {
              background: #c1c1e31a;
              padding: 4px 8px;
              border-radius: 8px;
              font-style: normal;
              font-weight: 700;
              font-size: 14px;
              line-height: 160%;
              color: #c1c1e3;
              &.active {
                background: rgba(255, 199, 0, 0.1);
                color: #ffc700;
              }
            }
          }
        }
        & > .private-profile {
          display: flex;
          justify-content: space-between;
          background: #151527;
          width: 100%;
          padding: 12px 16px;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          margin-top: 2px;
          & > p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 160%;
            color: #8f8faa;
            margin: 0;
          }
          & > .switch {
            position: relative;
            display: inline-flex;
            height: 22px;
            width: 43px;
            align-items: center;
            border-radius: 8px;
            border: none;
            background: #c1c1e31a;
            transition: background 333ms ease;
            cursor: pointer;
            &.active {
              background: #ffc7001a;
            }
            & > .switch-icon {
              display: inline-block;
              height: 14px;
              width: 14px;
              border-radius: 6px;
              transition: all 333ms ease;
              transform: translateX(0);
              background: #8f8faa;
              &.active {
                background: #ffc700;
                transform: translateX(1.2rem);
              }
            }
          }
        }
      }
      & > .self-exclude {
        margin-top: 16px;
        & > .title {
          font-family: "Inter";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 160%;
          color: #8f8faa;
          margin-bottom: 8px;
          padding: 0 12px;
        }
        & > .content {
          background: #111121;
          border-radius: 8px;
          padding: 12px 16px;
          & > p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            color: #8f8faa;
            margin: 0;
          }
          & > button {
            width: 100%;
            border: none;
            background: transparent;
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 160%;
            color: #414163;
            padding: 8px 0;
            margin-top: 8px;
          }
        }
      }
      & > .username {
        display: flex;
        align-items: center;
        margin-top: 12px;
        & > .name {
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 160%;
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
          color: #0d0d19;
          margin-left: 10px;
        }
      }
      & > button {
        margin: 16px 0;
        width: 100%;
        padding: 8px 0;
        background: #202032;
        border-radius: 8px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 160%;
        color: #c1c1e3;
        outline: none;
        border: none;
      }
    }
  }
`;

export default Profile;
