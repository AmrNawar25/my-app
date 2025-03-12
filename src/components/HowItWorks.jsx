import React, { useState, useEffect, useRef } from "react";
import { FaCloudUploadAlt, FaBrain, FaFileMedical } from "react-icons/fa";
import {
  Container,
  Title,
  StepsContainer,
  Step,
  Icon,
  ScanOverlay,
  ScanBar,
} from "../styles/HowItWorksStyles";

const HowItWorks = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !scanComplete) {
          setIsScanning(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [scanComplete]);

  // Stop scanning after 10 seconds and never restart
  useEffect(() => {
    if (isScanning) {
      const timer = setTimeout(() => {
        setIsScanning(false);
        setScanComplete(true); // Prevent scanning from repeating
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isScanning]);

  return (
    <Container ref={sectionRef}>
      <Title>How Horus Vision Works</Title>

      {/* Scanning Overlay (Runs only once) */}
      {isScanning && !scanComplete && (
        <ScanOverlay>
          <ScanBar />
        </ScanOverlay>
      )}

      {/* Steps - Appear after scanning */}
      <StepsContainer className={!scanComplete ? "hidden" : "visible"}>
        <Step>
          <Icon>
            <FaCloudUploadAlt />
          </Icon>
          <h3>Step 1:</h3>
          <p>Upload Chest X-ray Image</p>
        </Step>

        <Step>
          <Icon>
            <FaBrain />
          </Icon>
          <h3>Step 2:</h3>
          <p>AI Analyzes and Classifies Diseases</p>
        </Step>

        <Step>
          <Icon>
            <FaFileMedical />
          </Icon>
          <h3>Step 3:</h3>
          <p>Generates a Medical Report</p>
        </Step>
      </StepsContainer>
    </Container>
  );
};

export default HowItWorks;
