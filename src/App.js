import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WelcomePage from "./components/WelcomePage";
import HowItWorks from "./components/HowItWorks";
import XrayPage from "./components/XrayPage";
import MeetTheTeam from "./components/MeetTheTeam";
import ContactUs from "./components/ContactUs";
import SignupPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import PatientUpload from "./components/PatientUpload";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/PatientUpload" element={<PatientUpload />} />
        </Routes>
      </>
    </Router>
  );
}

// Home page component (includes WelcomePage and all sections)
const Home = () => (
  <>
    <WelcomePage />
    <HowItWorks />
    <XrayPage />
    <MeetTheTeam />
    
    <ContactUs />
  </>
  
);

export default App;
