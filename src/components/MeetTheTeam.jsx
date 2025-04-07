import React from "react";
import {
  TeamContainer,
  TeamTitle,
  TeamGrid,
  TeamMember,
  MemberImage,
  MemberInfo,
  MemberName,
  MemberRole,
} from "../styles/MeetTheTeamStyles";
import styled from "styled-components";

// Team Data
const teamMembers = [
  { name: "Khaled Ezz", role: "Team Leader & NLP", image: require("../assets/Khaled.jpg") },
  { name: "Mohanad Ayman", role: "Computer Vision", image: require("../assets/Hanoda.jpg") },
  { name: "Shaden Hazem", role: "Computer Vision", image: require("../assets/Shaden.jpg") },
  { name: "Youssef Wael", role: "NLP", image: require("../assets/Joe.jpg") },
  { name: "Amr Nawar", role: "Software", image: require("../assets/Nawar.jpg") },
];

// Dr. Mohamed (Supervisor)
const supervisor = { name: "Dr. Mohamed", role: "Supervisor", image: require("../assets/Dr. Mohamed.jpg") };

// Styled container to center Dr. Mohamed at the top
const SupervisorWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const MeetTheTeam = () => {
  return (
    <TeamContainer>
      <TeamTitle>Meet the Team</TeamTitle>

      {/* Dr. Mohamed - Center Top */}
      <SupervisorWrapper>
        <TeamMember>
          <MemberImage src={supervisor.image} alt={supervisor.name} />
          <MemberInfo>
            <MemberName>{supervisor.name}</MemberName>
            <MemberRole>{supervisor.role}</MemberRole>
          </MemberInfo>
        </TeamMember>
      </SupervisorWrapper>

      {/* Rest of the team */}
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberImage src={member.image} alt={member.name} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </TeamContainer>
  );
};

export default MeetTheTeam;
