import styled from "styled-components";

export const ContactContainer = styled.div`
  text-align: center;
  padding: 40px 0;
  background-color: #111;
  color: white;

  h2 {
    font-size: 2rem;
    color: gold;
    margin-bottom: 20px;
  }

  .contact-icons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
  }
`;

export const IconLink = styled.a`
  font-size: 2rem;
  color: white;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: gold;
  }
`;

export const ContactItem = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
