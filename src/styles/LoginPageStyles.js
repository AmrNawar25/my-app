import styled, { keyframes } from "styled-components";

// Background Gradient Animation
const gradientAnimation = keyframes`
  0% { background-position: 90% 90%; }
  50% { background-position: 50% 50%; }
  100% { background-position: 100% 100%; }
`;

// AI Particle Floating Animation
const floatParticles = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  50% { transform: translateY(-10px) scale(1.2); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0.8; }
`;

// AI Connection Line Animation
const glowLines = keyframes`
  0% { opacity: 0.2; transform: scaleX(1); }
  50% { opacity: 0.6; transform: scaleX(1.2); }
  100% { opacity: 0.2; transform: scaleX(1); }
`;

// Main Container (with animated background)
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 10%;
  background: linear-gradient(-45deg, black, #c99833);
  background-size: 300% 300%;
  animation: ${gradientAnimation} 5s ease infinite;
  position: relative;
  overflow: hidden;
`;

// Left Side (Eye Image Section)
export const LeftContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const EyeImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 9rem;
`;

// Right Side (Login Form Section)
export const RightContent = styled.div`
  width: 50%;
  background: white;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

// Login Form Fields
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #c99833;
  border-radius: 5px;
  font-size: 1rem;
`;

// Login Button
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.2rem;
  background: #c99833;
  color: black;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #a8772b;
    transform: scale(1.05);
  }
`;

// AI Particles Container
export const ParticlesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

// AI Particle (Glowing Node)
export const Particle = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: radial-gradient(circle, #ffc107 0%, transparent 70%);
  border-radius: 50%;
  opacity: 0.8;
  animation: ${floatParticles} ${(props) => props.duration} infinite ease-in-out;
`;

// AI Connection Line
export const Line = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: 2px;
  background: linear-gradient(to right, #ffc107, transparent);
  animation: ${glowLines} 3s infinite ease-in-out;
  opacity: 0.4;
`;
export const ForgotPassword = styled.a`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 5px;
  color: #c99833;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #a8772b;
    text-decoration: underline;
  }
`;
