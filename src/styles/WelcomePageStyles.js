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

// Main Container
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

// Left Content Section
export const LeftContent = styled.div`
  max-width: 50%;
  color: #c99833;
`;

export const Badge = styled.div`
  background: white;
  color: black;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #c99833;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
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

// Right Content Section
export const RightContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const EyeImage = styled.img`
  max-width: 100%;
  height: auto;
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
