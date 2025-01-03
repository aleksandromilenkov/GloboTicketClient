import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {}
const LogoBarContainer = styled.div`
    padding:1rem;
    background-color:black;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:100px;
    color:white;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  max-width: 100%;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 120px;
  }
`;
const LogoBar = (props: Props) => {
  return (
    <LogoBarContainer>
        <LogoContainer>
            <Link to='/home'><Logo src="logo.jpg" alt="logo" /></Link>
        </LogoContainer>
            <h1>GloboTicket Ticket Management</h1>
    </LogoBarContainer>
  )
}

export default LogoBar