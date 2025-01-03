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

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.4s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translate(5px, 5px)" : "none")};
  }

  div:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  div:nth-child(3) {
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none")};
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: max-height 0.3s ease;
  overflow: hidden;
  width:200px;

  @media (min-width: 769px) {
    
  }
`;


const Navbar = (props: Props) => {
     // 1. Load atuthenticated user
    const user = useSelector((state:RootState) => state.user);
    const isAuthenticated = !!user.token;
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    // Function to close the menu when a link is clicked
    const handleNavLinkClick = () => {
      setIsOpen(false);
    };
  
    return (
      <StyledHeaderMenu>
        <BurgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </BurgerMenu>
        <MenuItems isOpen={isOpen}>
          {isAuthenticated && (<>
              <NavLink to={"/home"} onClick={handleNavLinkClick} ><FaHome /> Home</NavLink>
              <NavLink to={"/events"} onClick={handleNavLinkClick}><MdEvent /> Events</NavLink>
              <NavLink to={"/categories"} onClick={handleNavLinkClick}><FaListAlt /> Categories</NavLink>
        <NavLink to={"/addCategory"} onClick={handleNavLinkClick}><FaPlus /> Create Category</NavLink>
        <NavLink to={"/sales"} onClick={handleNavLinkClick}><FaShoppingCart /> Sales</NavLink>
          </>
            )
            }
        </MenuItems>
      </StyledHeaderMenu>
  )
}

export default Navbar