import React, { useState, useEffect, useRef } from "react";
import XrayImage from "../assets/Xray.jpg"; // Import X-ray image
import { 
  XrayContainer, 
  XraySection, 
  XrayImg, 
  ScanEffect, 
  TextSection, 
  DetectionTitle, 
  DetectionText 
} from "../styles/XrayPageStyles"; 

const fullText = `★ Standard chest X-ray performed.
★ Findings suggest the presence of: Emphysema
★  Certainly. Emphysema symptoms can vary depending on the severity of the disease. Some common symptoms
 include:- Shortness of breath: Emphysema causes the lungs.`;

const XrayPage = () => {
  const [displayText, setDisplayText] = useState(""); // Stores the gradually appearing text
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false); // Controls when typing starts

  const textRef = useRef(null); // Reference for the text section

  // Detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Start typing effect only when section is in view
  useEffect(() => {
    if (startTyping && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 50); // Adjust speed of typing (50ms per character)
      return () => clearTimeout(timeout);
    }
  }, [index, startTyping]);

  return (
    <XrayContainer>
      {/* Left Side: X-ray Animation */}
      <XraySection>
        <XrayImg src={XrayImage} alt="X-ray Scan" />
        <ScanEffect />
      </XraySection>

      {/* Right Side: AI Detection Text (starts when visible) */}
      <TextSection ref={textRef}>
        <DetectionTitle>AI Diagnosis</DetectionTitle>
        <DetectionText>{displayText}</DetectionText> {/* Gradual typing effect */}
      </TextSection>
    </XrayContainer>
  );
};

export default XrayPage;
