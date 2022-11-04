import React from "react";

import styled from "@emotion/styled";

import { Transition, Popover } from "@headlessui/react";
import { usePopper } from "react-popper";

interface Props {
  placement: any;
  button: JSX.Element;
  children: React.ReactNode;
}

const Popup = ({ placement, button, children }: Props) => {
  const [referenceElement, setReferenceElement] = React.useState<any>();
  const [popperElement, setPopperElement] = React.useState<any>();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
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
        {button}
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
          {children}
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
    padding: 0;
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
  }
`;

export default Popup;
