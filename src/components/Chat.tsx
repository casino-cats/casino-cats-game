import { useState, useEffect, useRef } from "react";

import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Skeleton from "@mui/material/Skeleton";

import { chatSendMessage, chatHistory } from "../utils/lib/mutations";
import { useStoreActions, useStoreState } from "../store/hooks";
import toast from "react-hot-toast";

const Chat = () => {
  const [sending, setSending] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const messagesRef = useRef<null | HTMLDivElement>(null);

  const { messages } = useStoreState((store) => store.chatModel);
  const { setMessages } = useStoreActions((actions) => actions.chatModel);

  const scrollToBottom = () => {
    if (messagesRef.current) {
      messagesRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  };

  const updateInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    setSending(true);
    const sendMessage = await chatSendMessage({ message: input });
    if (sendMessage.status === "success") {
      const getHistory = await chatHistory();
      if (getHistory.status === "success") {
        setMessages(getHistory.data.chatHistoryList);
        setSending(false);
        setInput("");
        scrollToBottom();
      }
    }
    if (sendMessage.status === "error") {
      toast.error(sendMessage.message[0]);
    }
  };

  useEffect(() => {
    (async () => {
      const getHistory = await chatHistory();
      if (getHistory.status === "success") {
        setMessages(getHistory.data.chatHistoryList);
        setLoading(false);
        scrollToBottom();
      }
    })();
  }, []);

  return (
    <Root>
      <div className="chat-container">
        <div className="chat-wrapper">
          {loading && <CircularProgress />}
          {messages.length === 0 && !loading && (
            <>
              {Array(12)
                .fill("t")
                .map((i: number) => (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width="100%"
                    height={100}
                    sx={{
                      bgcolor: "rgb(16 16 31)",
                      marginBottom: 1,
                      "&::after": {
                        background:
                          "linear-gradient(90deg, transparent, rgb(255 255 255 / 1%), transparent)",
                      },
                    }}
                  />
                ))}
            </>
          )}
          {messages.map((data: any, i: number) => (
            <div className="chat-message">
              <div className="message--user">
                <Avatar src={data.userAvatar} sx={{ width: 22, height: 22 }} />
                <p className="level">{data.userLevel}</p>
                <p className="username">{data.userName}</p>
              </div>
              <div className="message--content">{data.message}</div>
            </div>
          ))}

          <div ref={messagesRef} />
        </div>
      </div>
      <div className="input">
        <TextField
          variant="outlined"
          placeholder="Your message..."
          value={input}
          onChange={(e) => updateInput(e)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        {sending && (
          <CircularProgress
            size={25}
            sx={{
              color: "#ffc700",
              position: "absolute",
              right: 10,
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          />
        )}
      </div>
    </Root>
  );
};

const Root = styled("div")`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #0d0d1a;
  padding: 15px;
  z-index: 20;
  & > .chat-container {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    & > .chat-wrapper {
      padding: 15px 0;
      & > .chat-message {
        & > .message--user {
          display: flex;
          align-items: center;
          color: #c1c1e3;
          font-size: 14px;
          font-weight: 700;
          & > p {
            margin-left: 8px;
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
          }
          & > .username {
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        & > .message--content {
          color: #8f8faa;
          background: #111121;
          padding: 8px 12px;
          font-size: 14px;
          border-radius: 8px;
          margin-left: 25px;
          font-smooth: antialiased;
          line-height: 20px;
          word-break: break-word;
        }
      }
    }
  }
  & > .input {
    margin-top: auto;
    position: relative;
    & > .MuiTextField-root {
      width: 100%;
      & input {
        padding: 12px 14px;
        color: white;
        position: relative;
        &::placeholder {
          color: #353556;
        }
      }
      & label.Mui-focused {
        color: white;
      }
      & > .MuiOutlinedInput-root {
        & fieldset {
          border-color: #1f1f35;
        }
      }
    }
  }
`;

export default Chat;
