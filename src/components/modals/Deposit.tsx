import { useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import styled from "@emotion/styled";

import { MdClose } from "react-icons/md";
import { useWallet } from "@solana/wallet-adapter-react";
import toast from "react-hot-toast";
import useClient from "../../hooks/useClient";

import { auth, depositTransaction, getNonce } from "../../utils/lib/mutations";
import * as buffer from "buffer";

interface Props {
  open: boolean;
  onClose: () => void;
}

window.Buffer = buffer.Buffer;

const Deposit = ({ open, onClose }: Props) => {
  const [value, setValue] = useState<any>();
  const client = useClient();
  const { publicKey, signMessage } = useWallet();

  const depositUsdc = async () => {
    const signature = await client?.depositUsdc(value);

    if (signature) {
      const result = await depositTransaction({
        coinType: 2,
        amount: value,
        signature: signature,
      });
      console.log(result);

      if (result.status === "success") {
        toast.success("Successfully deposited!");
      }
      if (result.status === "error") {
        toast.error(result.message[0]);
      }
    }
  };

  const depositSol = async () => {
    console.log(value);
    const signature = await client?.depositSol(value);
    if (signature) {
      const result = await depositTransaction({
        coinType: 1,
        amount: value,
        signature: signature,
      });
      console.log(result);

      if (result.status === "success") {
        toast.success("Successfully deposited!");
      }
      if (result.status === "error") {
        toast.error(result.message[0]);
      }
    }
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as={Root} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="background" />
        </Transition.Child>

        <div className="modal">
          <div className="modal-content">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modal-panel">
                <MdClose onClick={onClose} className="close" />
                <Dialog.Title as="h3">Deposit USDC</Dialog.Title>
                <div className="input">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  ></input>
                </div>

                <button type="button" onClick={depositSol}>
                  Deposit now
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

const Root = styled("div")`
  position: relative;
  z-index: 100;
  & .close {
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    margin: 15px;
    border-radius: 3px;
    transition: background 333ms ease;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  & > .background {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  & > .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    & > .modal-content {
      display: flex;
      min-height: 100%;
      align-items: center;
      justify-content: center;
      padding: 4px;
      align-text: center;
      & > .modal-panel {
        width: 100%;
        max-width: 320px;
        overflow: hidden;
        border-radius: 10px;
        padding: 24px;
        align-text: left;
        align-items: center;
        background: #0d0d19;
        & > h3 {
          margin: 0;
          color: #c1c1e3;
          font-size: 24px;
          font-family: Inter;
          font-weight: 700;
        }
        & > .input {
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
        }
        & > button {
          width: 100%;
          border: none;
          padding: 8px 0;
          background: #ffc700;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
`;

export default Deposit;
