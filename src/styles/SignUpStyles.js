import styled, { keyframes } from "styled-components";

// 🚀 Fade-in animation on load
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 🚀 Floating Animation (slow up & down movement)
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Main Container
export const SignUpContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f8f8f8;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

// Left Side Panel with Rounded Corners
export const LeftPanel = styled.div`
  background: rgb(122, 90, 27); /* Dark brown */
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    border-radius: 0;
  }
`;

// 🚀 Animated Art Image (Eye)
export const ArtImage = styled.img`
  width: 90%;
  max-width: 500px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  animation: ${fadeIn} 1.5s ease-in-out, ${floatAnimation} 4s ease-in-out infinite;

  &:hover {
    filter: drop-shadow(0px 0px 15px rgba(255, 215, 0, 0.6)); /* Soft gold glow */
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    width: 70%;
  }
`;

// Form Box (Right Side)
export const FormContainer = styled.div`
  background: white;
  padding: 3rem;
  width: 60%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 2rem;
  }

  h2 {
    font-size: 1.8rem;
    color: #c29550; /* Gold */
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: #c29550;
    margin: 10px 0;
  }

  p a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: bold;
  }

  .input-group {
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    font-size: 0.9rem;
    color: #888;
  }

  .divider span {
    background: white;
    padding: 0 10px;
  }
`;

// Input Fields
export const InputField = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 10px;
  outline: none;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #c29550;
  }
`;

// Signup Button
export const StyledButton = styled.button`
  background: #c29550;
  color: white;
  padding: 12px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: #a67c42;
  }
`;

// Social Buttons
export const SocialButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 10px;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    transition: 0.3s;
  }

  .facebook {
    background: #4267b2;
    color: white;
  }

  .facebook:hover {
    background: #365899;
  }

  .google {
    background: white;
    color: #333;
    border: 1px solid #ccc;
  }

  .google:hover {
    background: #f1f1f1;
  }
`;
