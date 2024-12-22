import React from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./Navbar";
import LogoBar from "./LogoBar";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh; /* Full height of the viewport */
`;

const MainContent = styled.main`
  flex: 1; /* Takes up remaining space */
`;

const AppLayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
`

type Props = {};
const AppLayout = (props: Props) => {
  return (
    <AppLayoutContainer>

      <LogoBar/>
    <StyledAppLayout>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
    </AppLayoutContainer>
  );
};

export default AppLayout;
