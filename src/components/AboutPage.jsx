import React from "react";
import { motion } from "framer-motion";
import {
  AboutContainer,
  Section,
  Title,
  Paragraph,
  Highlight,
  HighlightLink,
  TechGrid,
  TechItem,
  Divider,
} from "../styles/AboutPageStyles";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const AboutPage = () => {
  return (
    <AboutContainer>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>Our Mission</Title>
        <Paragraph>
          At <Highlight>Horus Vision</Highlight>, our mission is to revolutionize medical diagnostics using
          state-of-the-art AI. We aim to empower healthcare providers with fast, reliable, and accessible
          chest X-ray interpretations, especially in underserved regions and for elderly patients.
        </Paragraph>
      </motion.section>
      
        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>How It Started</Title>
        <Paragraph>
          Born out of a graduation project at <HighlightLink href="https://aiu.edu.eg/" target="_blank" rel="noopener noreferrer">Alamein International University</HighlightLink>, our team
          observed the diagnostic challenges faced in radiology. We envisioned an AI-driven assistant
          that could handle both image classification and medical report generation end-to-end.
        </Paragraph>
      </motion.section>

        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>Technology Stack</Title>
        <TechGrid>
          <TechItem>🧠 DenseNet-121</TechItem>
          <TechItem>💬 KevinLlama-7B</TechItem>
          <TechItem>⚛️ React + Tailwind CSS</TechItem>
          <TechItem>🔒 HIPAA-Compliant Backend</TechItem>
        </TechGrid>
      </motion.section>
      
        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>Who We Serve</Title>
        <Paragraph>
          Horus Vision is tailored for <Highlight>radiologists, clinics, and elderly patients</Highlight> who need
          fast and intuitive tools to assist with chest disease diagnostics. Our system is built with accessibility
          in mind — from large fonts and multilingual text to a simplified interface for non-tech-savvy users.
        </Paragraph>
      </motion.section>

        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>What Makes Us Unique</Title>
        <Paragraph>
          Unlike traditional tools that focus only on classification, Horus Vision offers:
        </Paragraph>
        <ul>
          <li>Full medical report generation using NLP</li>
          <li>Editable reports by doctors before finalization</li>
          <li>Support for both DICOM and PNG formats</li>
          <li>Bilingual and elderly-friendly interface</li>
        </ul>
      </motion.section>

        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>Project Achievements</Title>
        <Paragraph>
          - 🚀 <strong>91% classification accuracy</strong> on NIH ChestX-ray dataset<br />
          - ⚡ Report generation in <strong>under 5 seconds</strong><br />
          - 📋 Compliance with <strong>IEEE, HIPAA, and WHO ethical standards</strong>
        </Paragraph>
      </motion.section>

        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>Behind the Name: Horus Vision</Title>
        <Paragraph>
          Inspired by the Egyptian god Horus, whose eye symbolizes <Highlight>protection, health, and insight</Highlight>,
          we chose this name to reflect our AI’s goal: providing clear, reliable vision into patients' health through X-ray analysis.
        </Paragraph>
      </motion.section>
        <Divider />

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        as={Section}
      >
        <Title>What’s Next</Title>
        <Paragraph>
          We’re expanding Horus Vision to support CT and MRI scans, enable real-time doctor collaboration,
          and adopt federated learning to ensure maximum patient data privacy across hospitals.
        </Paragraph>
      </motion.section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      </motion.div>
    </AboutContainer>
  );
};

export default AboutPage;
 