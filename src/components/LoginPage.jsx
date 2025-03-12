import React from "react";
import {
  Container,
  LeftContent,
  EyeImage,
  RightContent,
  Input,
  Button,
  ForgotPassword,
  ParticlesContainer,
  Particle,
  Line,
} from "../styles/LoginPageStyles";
import eyeImage from "../assets/welcome-image.png"; // Ensure this path is correct

const LoginPage = () => {
  return (
    <Container>
      {/* Left Side - Eye Image Animation */}
      <LeftContent>
        <EyeImage src={eyeImage} alt="Eye Animation" />
      </LeftContent>

      {/* Right Side - Login Form */}
      <RightContent>
        <h2>Login to Your Account</h2>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
        <Button>Login</Button>
      </RightContent>

      {/* AI Particles */}
      <ParticlesContainer>
        <Particle top="20%" left="30%" size="15px" duration="4s" />
        <Particle top="50%" left="70%" size="10px" duration="3s" />
        <Particle top="80%" left="40%" size="12px" duration="5s" />

        {/* Connection Lines */}
        <Line top="30%" left="35%" width="100px" />
        <Line top="60%" left="65%" width="120px" />
      </ParticlesContainer>
    </Container>
  );
};

export default LoginPage;
