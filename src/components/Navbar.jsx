import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavLogo, NavLinks, NavItem } from "../styles/NavbarStyles";
import styled from "styled-components";

const Button = styled(Link)`
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
`;

const Navbar = () => {
  const location = useLocation(); // Get current page

  return (
    <Nav>
      <NavLogo>HorusVision</NavLogo>
      <NavLinks>
        <NavItem as={Link} to="/">Home</NavItem>
        <NavItem as={Link} to="/about">About</NavItem>
        <NavItem as={Link} to="/services">Services</NavItem>
        {/* Hide Signup button on Signup page, Hide Login button on Login page */}
        {location.pathname !== "/signup" && <Button to="/signup">Signup</Button>}
        {location.pathname !== "/login" && <Button to="/login">Login</Button>}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
