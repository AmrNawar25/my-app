import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavLogo, NavLinks, NavItem } from "../styles/NavbarStyles";
import styled from "styled-components";

const Button = styled(Link)`
  color: ${({ active }) => (active ? "black" : "white")};
  background: ${({ active }) => (active ? "#c99833" : "transparent")};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #c99833;
    color: black;
  }
`;

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // 🔒 Simulated login state - Replace this with real auth logic later
  const isLoggedIn = true; // ← Change to `true` for testing manually

  return (
    <Nav>
      <NavLogo>HorusVision</NavLogo>
      <NavLinks>
        <NavItem to="/" active={currentPath === "/"}>Home</NavItem>
        <NavItem to="/about" active={currentPath === "/about"}>About</NavItem>

        {/* Show Dashboard only when logged in */}
        {isLoggedIn && (
          <NavItem to="/dashboard" active={currentPath === "/dashboard"}>Dashboard</NavItem>
        )}

        {!isLoggedIn && currentPath !== "/signup" && (
          <Button to="/signup" active={currentPath === "/signup"}>Signup</Button>
        )}
        {!isLoggedIn && currentPath !== "/login" && (
          <Button to="/login" active={currentPath === "/login"}>Login</Button>
        )}
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
