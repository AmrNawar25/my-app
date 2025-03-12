import styled from "styled-components";

// 🔹 Main Container
export const TeamContainer = styled.div`
  text-align: center;
  padding: 40px 0;
  background: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -200px; /* Ensure no extra space */

`;

// 🔹 Title
export const TeamTitle = styled.h2`
  font-size: 2rem;
  color: #c99833;
  margin-bottom: 30px;
`;

// 🔹 Flexbox Layout (Ensures Proper Spacing)
export const TeamGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Reducing the gap */
  flex-wrap: nowrap; /* Prevents wrapping */
`;

// 🔹 Team Member Card (Smaller & Evenly Sized)
export const TeamMember = styled.div`
  background: #1a1a1a;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(255, 215, 0, 0.3);
  transition: 0.3s ease-in-out;
  text-align: center;
  width: 150px; /* Set fixed width */
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.5);
  }
`;


// 🔹 Larger Member Image (Fixed Size)
export const MemberImage = styled.img`
  width: 120px; /* Set exact width */
  height: 120px; /* Set exact height */
  object-fit: cover; /* Ensures uniformity */
  border-radius: 50%;
  border: 2px solid #c99833;
  margin-bottom: 5px;
`;

// 🔹 Member Info
export const MemberInfo = styled.div`
  text-align: center;
`;

// 🔹 Name (Smaller Font)
export const MemberName = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2px;
`;

// 🔹 Role (Smaller Font)
export const MemberRole = styled.p`
  font-size: 0.8rem;
  color: #c99833;
  margin-top: 2px;
`;
