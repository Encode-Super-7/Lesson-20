import { ConnectKitButton } from "connectkit";
import styled from 'styled-components'


import * as styles from './style.css'


export const Nav = styled.div`
padding: 20px 12px;
top: 0;
width: 100%;
height: 20px;
z-index: 2;
flex-direction: column;
`

interface Props {
  className?: string;
}

export function Navbar(props: Props) {
  const className = props.className ?? "";

  return (
    <Nav><div>
        NavBar
      <ConnectKitButton />
    </div>
    </Nav>
  );
}
