import styled from "styled-components";
import { Link } from "react-router-dom";

// Navbar Container
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 88%;
  background: rgba(0, 0, 0, 0.9); 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10%;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

// Logo
export const NavLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #c99833;
  cursor: pointer;
`;

// Links Container
export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

// Individual Nav Item
export const NavItem = styled(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? "black" : "white")};
  background: ${({ active }) => (active ? "#c99833" : "transparent")};
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s ease-in-out;
  padding: 10px 15px;
  border-radius: 5px;

  &:hover {
    background: #c99833;
    color: black;
  }
`;
