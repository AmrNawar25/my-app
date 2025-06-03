import styled, { keyframes } from "styled-components";

// Loading Spinner Animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const UploadContainer = styled.div`
  min-height: 100vh;  // Changed from height to min-height
  background: linear-gradient(135deg, black, #c99833);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;  // Add some padding
  box-sizing: border-box;  // Ensure padding is included in height calculation
`;

export const UploadCard = styled.div`
  position: relative;
  background: #111;
  border: 2px solid #c99833;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 550px;
  min-height: 250px;  // Add minimum height
  text-align: center;
  box-shadow: 0 0 15px rgba(201, 152, 51, 0.4);
  overflow: hidden;
`;

export const UploadTitle = styled.h2`
  color: #c99833;
  margin-bottom: 20px;
  font-size: 2rem;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  background-color: #c99833;
  color: black;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background-color: #a8772b;
  }
`;

export const PreviewImage = styled.img`
  margin-top: 20px;
  max-width: 50%;
  border-radius: 12px;
  border: 1px solid #c99833;
`;

export const UploadButton = styled.button`
  margin-top: 25px;
  margin-left: 5px;
  background: transparent;
  color: #c99833;
  padding: 12px 24px;
  border: 2px solid #c99833;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &:hover {
    background: #c99833;
    color: black;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Loader = styled.div`
  margin-top: 20px;
  border: 4px solid rgba(201, 152, 51, 0.3);
  border-top: 4px solid #c99833;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const ResultText = styled.p`
  margin-top: 20px;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const ErrorText = styled.p`
  margin-top: 20px;
  color: red;
  font-weight: bold;
  font-size: 1.1rem;
`;
