import styled from "styled-components";
import { FaUserMd } from "react-icons/fa";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #111;
  font-family: 'Segoe UI', sans-serif;
  color: #fff;
  position: relative;
  overflow: hidden; /* hide outer scroll */
`;

export const Sidebar = styled.div`
  background: linear-gradient(to bottom, #1a1100, #c7973c);
  color: white;
  width: ${props => (props.$open ? "200px" : "60px")};
  transition: width 0.3s ease;
  padding-top: 80px;
  position: fixed;
  top: 71px; /* Leave space for nav bar */
  left: 0;
  bottom: 0;
  height: calc(100vh - 60px); /* Sidebar shorter */
  overflow: hidden;
  z-index: 1000;
`;


export const SidebarHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 15px;
  z-index: 1100; /* keep toggle button above sidebar content */
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 22px;
  cursor: pointer;
  z-index: 1100;
  position: relative;
`;

export const ProfileSection = styled.div`
  text-align: center;
  margin: 30px 0;

  h3 {
    font-size: 18px;
    margin-top: 10px;
    color: #fff;
  }
`;

export const DoctorIcon = styled(FaUserMd)`
  font-size: 50px;
  margin-bottom: 10px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0 10px;
`;

export const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 16px;
  gap: 10px;
  cursor: pointer;
  color: white;
`;

export const MainContent = styled.div`
  margin-left: ${props => (props.$sidebarOpen ? "200px" : "60px")};
  padding: 30px;
  padding-top: 60px;
  flex: 1; /* fill available space */
  overflow-y: auto; /* enable internal scroll */
  background-color: #111;
  transition: margin-left 0.3s ease;
  position: relative;
  z-index: 1;
  color: #fff;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    color: #c7973c;
  }
`;

export const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #222;
  border-left: 5px solid #c7973c;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  padding: 20px;
  border-radius: 12px;
  flex: 1;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;

export const ReportsSection = styled.div`
  margin-top: 40px;

  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    color: #c7973c;
  }
`;

export const ReportCard = styled.div`
  background: #1a1a1a;
  border-left: 5px solid #c7973c;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 215, 0, 0.1);
`;

export const ReportTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  color: #f2f2f2;
`;

export const ReportDetails = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #ccc;
`;
