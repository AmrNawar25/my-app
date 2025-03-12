import styled, { keyframes } from "styled-components";

// 🔹 Scan Bar Animation (Moves from Top to Bottom)
const scanAnimation = keyframes`
  0% { top: 0%; opacity: 0.5; }
  50% { top: 50%; opacity: 1; }
  100% { top: 100%; opacity: 0.5; }
`;

// 🔹 Flickering Effect for the X-ray Image
const flicker = keyframes`
  0% { opacity: 0.8; filter: brightness(1); }
  50% { opacity: 1; filter: brightness(1.2); }
  100% { opacity: 0.8; filter: brightness(1); }
`;

// 🔹 Background Container (Split into Two Sections)
export const XrayContainer = styled.div`
  display: flex;
  height: 100vh;
  background: black;
  color: white;
`;

// 🔹 Left Side (X-ray Section)
export const XraySection = styled.div`
  flex: 1; /* Takes 50% of the screen */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 🔹 X-ray Image
export const XrayImg = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  animation: ${flicker} 1.5s infinite alternate;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

// 🔹 Scan Effect (Light moving over X-ray)
export const ScanEffect = styled.div`
  position: absolute;
  width: 80%;
  height: 8px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0));
  top: 0;
  left: 10%;
  animation: ${scanAnimation} 3s linear infinite;
`;

// 🔹 Right Side (Text Section)
export const TextSection = styled.div`
  flex: 1; /* Takes 50% of the screen */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background: #151515; /* Dark background */
  border-left: 2px solid gold;
  text-align: left;
`;

// 🔹 Title
export const DetectionTitle = styled.h2`
  font-size: 2rem;
  color: #c99833;
  margin-bottom: 20px;
`;

// 🔹 Detected Text (With Typing Effect)
export const DetectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
  white-space: pre-line; /* Ensures proper text formatting */
`;
