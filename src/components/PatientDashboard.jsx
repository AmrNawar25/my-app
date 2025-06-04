import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  PageContainer,
  DashboardContainer,
  UserInfoSection,
  ReportsSection,
  DashboardHeader,
  PatientName,
  EditButton,
  LogoutButton,
  LogoutWrapper,
  PatientInfoGrid,
  InfoCard,
  InfoLabel,
  InfoValue,
  SectionTitle,
  UploadReportWrapper,
  UploadReportButton,
  ReportsGrid,
  ReportCard,
  ReportHeader,
  ReportTitle,
  ReportMeta,
  ViewReportButton
} from '../styles/PatientDashboardStyles';

const PatientDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <>
      <Navbar />

      <PageContainer>
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
            <UploadReportWrapper>
              <SectionTitle>Reports</SectionTitle>
              <UploadReportButton onClick={() => navigate('/patient-upload')}>
                Upload Medical File
              </UploadReportButton>
            </UploadReportWrapper>

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

          {/* 👇 Logout Button at the bottom */}
          <LogoutWrapper>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </LogoutWrapper>
        </DashboardContainer>
      </PageContainer>
    </>
  );
};

export default PatientDashboard;
