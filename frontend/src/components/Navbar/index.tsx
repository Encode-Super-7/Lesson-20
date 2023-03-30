import React from "react";
import { Box } from "rebass/styled-components";
import { Nav, LeftSideContainer, RightSideContainer } from "./style.css";
import { ConnectButton } from "./ConnectButton";

export const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <Box>
          <LeftSideContainer>Lottery Game</LeftSideContainer>
        </Box>
        <Box>
          <RightSideContainer>
            <ConnectButton />
          </RightSideContainer>
        </Box>
      </Nav>
    </>
  );
};
