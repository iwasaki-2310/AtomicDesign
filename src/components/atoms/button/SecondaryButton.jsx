import styled from "styled-components";
import { BaseButoon } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseButoon)`
  background-color: #11999e;
`;
