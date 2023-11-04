import styled from "styled-components";
import { BaseButoon } from "./BaseButton";

export const SecondaryButton = (props) => {
    const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButoon)`
  background-color: #11999e;
`;