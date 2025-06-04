import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import HowItWorks from "./components/HowItWorks";
import XrayPage from "./components/XrayPage";
import MeetTheTeam from "./components/MeetTheTeam";
import ContactUs from "./components/ContactUs";
import SignupPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import PatientUpload from "./components/PatientUpload";
import PatientDashboard from "./components/PatientDashboard";

const AppContent = () => {
  const location = useLocation();
  
  return (
    <>
      {!location.pathname.includes('/dashboard') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/patient-upload" element={<PatientUpload />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
      </Routes>
    </>
  );
};

const Home = () => (
  <>
    <WelcomePage />
    <HowItWorks />
    <XrayPage />
    <MeetTheTeam />
    <ContactUs />
  </>
);

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}