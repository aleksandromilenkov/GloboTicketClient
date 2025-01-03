import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    width: fit-content;
`;
type Props = {}

const HomePage = (props: Props) => {
    const user = useSelector((state:RootState) => state.user);
    const isAuthenticated = !!user.token;
    const navigate = useNavigate();

  return (
    <div style={{padding:"1rem"}}>
        <h1 style={{color:"#2d8f88"}}>Welcome to the GloboTicket Ticket Management System!</h1>
        <p style={{fontWeight:"bold", fontSize:"1.5rem"}}>Using this application you have access to all functionalities of GloboTicket.</p>
        {!isAuthenticated && <ButtonGroup>
            <Button onClick={()=> navigate("/login")}>Click here to Log in</Button>
            <Button onClick={()=> navigate("/register")}>Click here to Register</Button>
        </ButtonGroup>}
    </div>
  )
}

export default HomePage