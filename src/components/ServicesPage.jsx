import React from 'react';
import { ServicesContainer, ServicesHeader, ServiceItem } from '../styles/ServicesPageStyles';

const ServicesPage = () => {
  return (
    <ServicesContainer>
      <ServicesHeader>Our Services</ServicesHeader>
      <ServiceItem>🔍 AI-powered Chest X-ray Classification</ServiceItem>
      <ServiceItem>📝 Automated Medical Report Generation</ServiceItem>
      <ServiceItem>🌐 Multilingual Support (Arabic & English)</ServiceItem>
      <ServiceItem>👨‍⚕️ Doctor-Editable Report Interface</ServiceItem>
      <ServiceItem>📥 PDF Report Export & Notifications</ServiceItem>
    </ServicesContainer>
  );
};

export default ServicesPage;
