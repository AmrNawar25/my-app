import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import WelcomeImage from "../assets/welcome-image.png"; 
import { 
  Container, 
  LeftContent, 
  Badge, 
  Title, 
  Button, 
  RightContent, 
  EyeImage, 
  ParticlesContainer, 
  Particle, 
  Line 
} from "../styles/WelcomePageStyles"; 

// AI Floating Particles
const particles = [
  { top: "5%", left: "10%", size: "8px", duration: "4s" },
  { top: "15%", left: "25%", size: "12px", duration: "5s" },
  { top: "25%", left: "45%", size: "10px", duration: "6s" },
  { top: "35%", left: "70%", size: "15px", duration: "5s" },
  { top: "40%", left: "15%", size: "14px", duration: "7s" },
  { top: "50%", left: "55%", size: "12px", duration: "4.5s" },
  { top: "60%", left: "85%", size: "14px", duration: "5.5s" },
  { top: "70%", left: "35%", size: "9px", duration: "6.5s" },
  { top: "80%", left: "5%", size: "10px", duration: "5s" },
  { top: "85%", left: "50%", size: "12px", duration: "4s" },
  { top: "90%", left: "80%", size: "16px", duration: "4.5s" },
  { top: "95%", left: "20%", size: "14px", duration: "6s" },
];

// AI Connecting Lines
const lines = [
  { top: "10%", left: "5%", width: "40px" },
  { top: "20%", left: "30%", width: "60px" },
  { top: "30%", left: "55%", width: "70px" },
  { top: "40%", left: "75%", width: "50px" },
  { top: "50%", left: "15%", width: "55px" },
  { top: "60%", left: "65%", width: "45px" },
  { top: "70%", left: "25%", width: "60px" },
  { top: "80%", left: "85%", width: "50px" },
  { top: "85%", left: "45%", width: "70px" },
  { top: "90%", left: "10%", width: "55px" },
];

const WelcomePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Container>
      {/* AI Particles & Lines */}
      <ParticlesContainer>
        {particles.map((particle, index) => (
          <Particle 
            key={index} 
            top={particle.top} 
            left={particle.left} 
            size={particle.size} 
            duration={particle.duration} 
          />
        ))}
        {lines.map((line, index) => (
          <Line 
            key={index} 
            top={line.top} 
            left={line.left} 
            width={line.width} 
          />
        ))}
      </ParticlesContainer>

      {/* Left Side Content */}
      <LeftContent>
        <Badge>World’s Most Adopted HealthCare AI</Badge>
        <Title>Transforming X-rays into Clarity and Care.</Title>
        <Button onClick={() => navigate("/login")}>Start Now</Button>
        <Button onClick={() => navigate("/about")}>Learn More</Button>
        <Button onClick={() => navigate("/contact")}>Contact Us</Button>
      </LeftContent>

      {/* Right Side Image */}
      <RightContent>
        <EyeImage src={WelcomeImage} alt="Welcome Design" />
      </RightContent>
    </Container>
  );
};

export default WelcomePage;
