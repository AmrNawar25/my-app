import styled, { keyframes } from "styled-components";

// Scanning bar animation
const scanAnimation = keyframes`
  0% { top: 0%; opacity: 0.5; }
  50% { opacity: 1; }
  100% { top: 100%; opacity: 0.5; }
`;

// Fade-in animation
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

// Container
export const Container = styled.div`
  text-align: center;
  padding: 50px 0;
  position: relative;
  background: black;
  min-height: 100vh;
`;

// Title
export const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #c99833;
  margin-bottom: 80px;
`;

// Steps Container
export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;

  &.hidden {
    opacity: 0;
  }

  &.visible {
    animation: ${fadeIn} 1s ease-in-out 4s forwards;
  }
`;

// Step Rhombus (Increased size & adjusted layout)
export const Step = styled.div`
  width: 230px; /* Increased size */
  height: 230px;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid #c99833;
  transform: rotate(45deg);
  transition: 0.3s ease-in-out;
  padding: 20px;

  &:hover {
    transform: rotate(45deg) scale(1.1);
    box-shadow: 0 0 25px #c99833;
  }

  h3, p {
    transform: rotate(-45deg);
    text-align: center;

    width: 80%;
  }

  h3 {
    font-size: 1rem;
    font-weight: bold;
    margin-top: -10px; /* Moves it up */
    margin-right: 20px;
  }

  p {
    font-size: 1rem;
    margin-top: -10px; /* Moves it up */
    margin-left: 50px;
  }
`;

export const Icon = styled.div`
  font-size: 2.8rem;
  color: #c99833;
  position: relative;
  left: -45px; /* Moves icon 10px to the left */
  bottom: 5px;
  transform: rotate(-45deg);
`;

// Scanning Overlay
export const ScanOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Scanning Bar
export const ScanBar = styled.div`
  width: 80%;
  height: 6px;
  background: linear-gradient(90deg, #ffc107, transparent);
  position: absolute;
  animation: ${scanAnimation} 5s linear infinite;
`;
