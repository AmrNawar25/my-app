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

// Team Data
const teamMembers = [
  { name: "Khaled Ezz", role: "Team Leader & NLP", image: require("../assets/Khaled.jpg") },
  { name: "Mohanad Ayman", role: "Computer Vision", image: require("../assets/Hanoda.jpg") },
  { name: "Shaden Hazem", role: "Computer Vision", image: require("../assets/Shaden.jpg") },
  { name: "Youssef Wael", role: "NLP", image: require("../assets/Joe.jpg") },
  { name: "Amr Nawar", role: "Software", image: require("../assets/Nawar.jpg") },
];

const MeetTheTeam = () => {
  return (
    <TeamContainer>
      <TeamTitle>Meet the Team</TeamTitle>
      <TeamGrid>
        {/* First Row */}
        <TeamMember>
          <MemberImage src={teamMembers[0].image} alt={teamMembers[0].name} />
          <MemberInfo>
            <MemberName>{teamMembers[0].name}</MemberName>
            <MemberRole>{teamMembers[0].role}</MemberRole>
          </MemberInfo>
        </TeamMember>
        <TeamMember>
          <MemberImage src={teamMembers[1].image} alt={teamMembers[1].name} />
          <MemberInfo>
            <MemberName>{teamMembers[1].name}</MemberName>
            <MemberRole>{teamMembers[1].role}</MemberRole>
          </MemberInfo>
        </TeamMember>

        {/* Second Row (Centered) */}
        <TeamMember className="center">
          <MemberImage src={teamMembers[2].image} alt={teamMembers[2].name} />
          <MemberInfo>
            <MemberName>{teamMembers[2].name}</MemberName>
            <MemberRole>{teamMembers[2].role}</MemberRole>
          </MemberInfo>
        </TeamMember>

        {/* Third Row */}
        <TeamMember>
          <MemberImage src={teamMembers[3].image} alt={teamMembers[3].name} />
          <MemberInfo>
            <MemberName>{teamMembers[3].name}</MemberName>
            <MemberRole>{teamMembers[3].role}</MemberRole>
          </MemberInfo>
        </TeamMember>
        <TeamMember>
          <MemberImage src={teamMembers[4].image} alt={teamMembers[4].name} />
          <MemberInfo>
            <MemberName>{teamMembers[4].name}</MemberName>
            <MemberRole>{teamMembers[4].role}</MemberRole>
          </MemberInfo>
        </TeamMember>
      </TeamGrid>
    </TeamContainer>
  );
};

export default MeetTheTeam;
