import styled from "styled-components";
import { BaseButoon } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButoon)`
  background-color: #40514e;
`;
