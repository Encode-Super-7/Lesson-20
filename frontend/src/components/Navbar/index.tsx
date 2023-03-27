import { ConnectButton } from '../ConnectButton';
import styled from "styled-components";

import { Nav } from "./style.css";



interface Props {
  className?: string;
}

export function Navbar(props: Props) {
  const className = props.className ?? "";

  return (
    <>
    <Nav>
        Lottery 
        <ConnectButton />
      
    </Nav>
    </>
  );
}
