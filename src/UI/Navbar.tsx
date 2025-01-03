import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, NavLink as RouterNavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUserAlt, FaHamburger,  FaListAlt, FaPlus, FaShoppingCart } from 'react-icons/fa'; // Example from FontAwesome
import { MdEvent } from 'react-icons/md'; // Example from Material Design
import { FiMenu } from 'react-icons/fi'; // Example from Feather
import { useSelector } from 'react-redux';
import { RootState } from '../store';

type Props = {};

const StyledHeaderMenu = styled.nav`
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2d8f88;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
   @media (max-width: 769px) {
    width:100%;
  }
`;

const NavLink = styled(RouterNavLink)`
  color: white;
  width:100%;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  display:flex;
  gap:1rem;
  &.active {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
     @media (max-width: 769px) {
    width: fit-content;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff1a1a;
  }
`;



const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: max-height 0.3s ease;
  overflow: hidden;
  width:200px;

  @media (max-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width:100%;
    font-size:0.9rem;
  }
`;


const Navbar = (props: Props) => {
     // 1. Load atuthenticated user
    const user = useSelector((state:RootState) => state.user);
    const isAuthenticated = !!user.token;
  
    return (
        <StyledHeaderMenu>
        <MenuItems>
          {isAuthenticated && (<>
              <NavLink to={"/home"}  ><FaHome /> Home</NavLink>
              <NavLink to={"/events"} ><MdEvent /> Events</NavLink>
              <NavLink to={"/categories"}><FaListAlt /> Categories</NavLink>
              <NavLink to={"/addCategory"}><FaPlus /> Create Category</NavLink>
              <NavLink to={"/sales"}><FaShoppingCart /> Sales</NavLink>
          </>
            )
            }
        </MenuItems>
      </StyledHeaderMenu>
  )
}

export default Navbar