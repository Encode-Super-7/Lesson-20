import styled from "styled-components";




const baseSideContainer = styled.div`
  display: flex;
  width: full;
  flex: 1;
  flex-shrink: 2;
  margin-left: 24px;
  margin-right: 24px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

export const LeftSideContainer = styled(baseSideContainer)`
  align-items: center;
  color: white;
`;

export const RightSideContainer = styled(baseSideContainer)`
  align-items: center;
  
`;


export const Nav = styled.nav`
  
  width: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: #555555;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;