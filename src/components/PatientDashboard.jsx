import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PageContainer,
  HomeButtonWrapper,
  HomeButton,
  DashboardContainer,
  UserInfoSection,
  ReportsSection,
  DashboardHeader,
  PatientName,
  EditButton,
  PatientInfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  SectionTitle,
  ReportsGrid,
  ReportCard,
  ReportHeader,
  ReportTitle,
  ReportMeta,
  ViewReportButton
} from '../styles/PatientDashboardStyles';

const PatientDashboard = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <HomeButtonWrapper>
        <HomeButton onClick={() => navigate('/')}>HORUS VISION</HomeButton>
      </HomeButtonWrapper>
      
      <DashboardContainer>
        <UserInfoSection>
          <DashboardHeader>
            <PatientName>Mrs. Christina</PatientName>
            <EditButton>Edit</EditButton>
          </DashboardHeader>

          <PatientInfoGrid>
            <InfoCard>
              <InfoLabel>Birthdate</InfoLabel>
              <InfoValue>25/5/1976</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Phone Number</InfoLabel>
              <InfoValue>0123456789</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>Christina22@gmail.com</InfoValue>
            </InfoCard>
            <InfoCard>
              <InfoLabel>Gender</InfoLabel>
              <InfoValue>Female</InfoValue>
            </InfoCard>
          </PatientInfoGrid>
        </UserInfoSection>

        <ReportsSection>
          <SectionTitle>Reports</SectionTitle>
          <ReportsGrid>
            <ReportCard status="Completed">
              <ReportHeader>
                <ReportTitle>Report 1</ReportTitle>
                <ReportMeta>10:30 PM • 27/1/2024</ReportMeta>
              </ReportHeader>
              <ViewReportButton status="Completed">View Report</ViewReportButton>
            </ReportCard>
            
            <ReportCard status="Completed">
              <ReportHeader>
                <ReportTitle>Report 2</ReportTitle>
                <ReportMeta>1:12 PM • 10/5/2024</ReportMeta>
              </ReportHeader>
              <ViewReportButton status="Completed">View Report</ViewReportButton>
            </ReportCard>
            
            <ReportCard status="Completed">
              <ReportHeader>
                <ReportTitle>Report 3</ReportTitle>
                <ReportMeta>5:30 PM • 27/7/2024</ReportMeta>
              </ReportHeader>
              <ViewReportButton status="Completed">View Report</ViewReportButton>
            </ReportCard>
            
            <ReportCard status="Pending">
              <ReportHeader>
                <ReportTitle>Report 4</ReportTitle>
                <ReportMeta>12:00 PM • 23/1/2025</ReportMeta>
              </ReportHeader>
              <ViewReportButton status="Pending">Pending</ViewReportButton>
            </ReportCard>
          </ReportsGrid>
        </ReportsSection>
      </DashboardContainer>
    </PageContainer>
  );
};

export default PatientDashboard;