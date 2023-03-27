import { ConnectKitButton } from "connectkit";

import styled from "styled-components";
const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  color: #4f4f4f;
  background: #f87171;
  font-size: 16px;
  font-weight: 500;
  border-radius: 10rem;
  transition: 200ms ease;
  &:hover {
    background: #FE9599;
    border: 1px solid #FE9599;
  }
  &:active {
    box-shadow: 0 6px 32px -6px #f87171;
  }
`;

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <StyledButton onClick={show}>
            {isConnected ? ensName ?? truncatedAddress : "Connect"}
          </StyledButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
