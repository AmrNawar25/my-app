import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";
import { ContactContainer, IconLink, ContactItem } from "../styles/ContactUsStyles";

const ContactUs = () => {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <div className="contact-icons">
        <IconLink href="https://facebook.com" target="_blank">
          <FaFacebook />
        </IconLink>
        <IconLink href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://github.com" target="_blank">
          <FaGithub />
        </IconLink>
      </div>
      <ContactItem>
        <FaPhone /> <span>+123 456 7890</span>
      </ContactItem>
      <ContactItem>
        <FaEnvelope /> <span>HorusVision@domain.com</span>
      </ContactItem>
    </ContactContainer>
  );
};

export default ContactUs;
