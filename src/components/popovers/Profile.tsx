import { useState } from "react";

import styled from "@emotion/styled";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import { Switch } from "@headlessui/react";
import { useStoreState } from "../../store/hooks";
import { updateUsername, updateAvatar } from "../../utils/lib/mutations";

import toast from "react-hot-toast";

const testImages = [
  {
    name: "Random Image #125",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/33/332f28cd91228788c6e6b475ff50df20a23ff993_full.jpg",
  },
  {
    name: "Random Image #643",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/39/3909657d6ff8d9c78863162eaf3727e3beb14811_full.jpg",
  },
  {
    name: "Random Image #163",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c2/c21101a08d2bfc223bcf02c11effce5b3f50aa03_full.jpg",
  },
  {
    name: "Random Image #185",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/e2/e2f4d9d93bddb0d5ddfb529beefc96a378c0bd53_full.jpg",
  },
  {
    name: "Random Image #7321",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/8a/8aee2f1b7072d781a039b918859c605bc7954f35_full.jpg",
  },
  {
    name: "Random Image #8452",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00b2708586f30cd18c88bdaec8065175af28e5b1_full.jpg",
  },
  {
    name: "Random Image #12",
    url: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00302833ef527b01cc1e6cbc3e1083c536a71f02_full.jpg",
  },
];

const Profile = () => {
  const { user } = useStoreState((store) => store.userModel);
  const [nickname, setNickname] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [enabled, setEnabled] = useState<boolean>(false);

  const updateNickname = async () => {
    const changeNickname = await updateUsername({
      username: nickname ?? user.userName,
    });
    const changeAvatar = await updateAvatar({ avatar: selected });

    if (changeAvatar.status === "success") {
      toast.success("Successfully updated profile!");
    }
    if (changeAvatar.status === "error") {
      toast.error(changeNickname.message[0]);
    }

    if (changeNickname.status === "success") {
      toast.success("Successfully updated profile!");
    }
    if (changeNickname.status === "error") {
      toast.error(changeNickname.message[0]);
    }
  };

  return (
    <Styled>
      {!editing ? (
        <>
          <Avatar
            src={user.avatar}
            sx={{
              width: 64,
              height: 64,
            }}
          />
          <div className="username">
            <div className="name">{user.userName}</div>
            <div className="level">{user.level}</div>
          </div>

          <button onClick={() => setEditing((k) => !k)}>Edit Profile</button>

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
        </>
      ) : (
        <div className="edit-profile">
          <h1>Edit Profile</h1>
          <h4>Nickname</h4>
          <input
            type="text"
            placeholder={user.userName}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <div className="edit-icon">
            <div className="title">Profile Picture</div>

            <div className="inventory-grid">
              {testImages.map((t, i) => (
                <div
                  className={`item ${t.url === selected ? "active" : ""}`}
                  onClick={() => setSelected(t.url)}
                >
                  <Avatar
                    src={t.url}
                    sx={{
                      width: "88px",
                      height: "88px",
                      marginBottom: "8px",
                    }}
                  />
                  <p>{t.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="edit-actions">
            <button onClick={() => setEditing((k) => !k)} className="cancel">
              Cancel
            </button>
            <button onClick={updateNickname}>Save</button>
          </div>
        </div>
      )}
    </Styled>
  );
};

const Styled = styled("div")`
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
  & > .edit-profile {
    & > h1 {
      margin: 0;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 160%;
      color: #c1c1e3;
    }
    & > h4 {
      margin: 0;
      margin-top: 16px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: #8f8faa;
    }
    & > input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      padding: 20px 0;
      color: white;
      font-size: 24px;
      font-weight: 700;
      &::placeholder {
        color: #c1c1e3;
        opacity: 0.2;
      }
    }
    & > .edit-icon {
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
      & > .inventory-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        height: 250px;
        overflow: hidden;
        & > .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: calc(100% / 2 - 5px);
          padding: 16px 21px;
          background: #111121;
          border-radius: 10px;
          opacity: 0.25;
          cursor: pointer;
          transition: 333ms ease;
          &.active {
            opacity: 1;
          }
          & > p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 160%;
            color: #8f8faa;
            margin: 0;
          }
        }
      }
    }
    & > .edit-actions {
      display: flex;
      gap: 10px;
      margin-top: 16px;
      width: 100%;
      & > button {
        width: 100%;
        padding: 12px;
        border: none;
        background: #ffc700;
        border-radius: 8px;
        color: #0a0a14;
        font-weight: 700;
        font-size: 14px;
        &.cancel {
          background: transparent;
          color: #414163;
        }
      }
    }
  }
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
      max-width: calc(100% - 50px);
      text-overflow: ellipsis;
      overflow: hidden;
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
`;

export default Profile;
