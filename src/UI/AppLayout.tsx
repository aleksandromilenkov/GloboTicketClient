import React from "react";
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Navbar from "./Navbar";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height of the viewport */
`;

const MainContent = styled.main`
  flex: 1; /* Takes up remaining space */
`;

type Props = {};
const AppLayout = (props: Props) => {
  return (
    <StyledAppLayout>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </StyledAppLayout>
  );
};

export default AppLayout;
