import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavLogo, NavLinks, NavItem } from "../styles/NavbarStyles";
import styled from "styled-components";

import { useUser } from "../contexts/UserContext";
import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  // 🔒 Simulated login state - Replace this with real auth logic later
  const {isLoggedIn , UserRole} = useUser(); // ← Change to `true` for testing manually

  const handleDashboardClick = (e) => {
    e.preventDefault()
    if (UserRole === "Doctor") {
      navigate("/doctor-dashboard");
    }
    else if (UserRole === "Patient") {
      navigate("/patient-dashboard");
    }
  }
  return (
    <Nav>
      <NavLogo>HorusVision</NavLogo>
      <NavLinks>
        <NavItem to="/" active={currentPath === "/"}>Home</NavItem>
        <NavItem to="/about" active={currentPath === "/about"}>About</NavItem>

        {/* Show Dashboard only when logged in */}
        {isLoggedIn && (
          <NavItem to="#" onClick={handleDashboardClick} active={currentPath.includes("dashboard")}>Dashboard</NavItem>
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
