import styled from "@emotion/styled";

import plus from "../assets/plus.svg";

interface Props {
  label: string;
  onClick?: any | undefined;
}

const Button = ({ label, onClick }: Props) => {
  return (
    <Root onClick={onClick}>
      <img src={plus} alt="plus" />
      <p>{label}</p>
    </Root>
  );
};

const Root = styled("div")`
  display: flex;
  align-items: center;
  background: #ffc700;
  border: none;
  border-radius: 8px;
  padding: 2px 17px 5px;
  height: 100%;
  max-height: 38px;
  cursor: pointer;
  transition: background 333ms ease;
  & > p {
    color: #0a0a14;
    font-size: 14px;
    font-weight: 700;
    padding: 0 6px;
  }
  &:hover {
    background: #ffac00;
  }
`;

export default Button;
