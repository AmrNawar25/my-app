import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {getUserData} from '../utils/UserUtils';

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
import { GetUserReports , handleDownloadReport} from '../utils/ReportsUtils';
import { useUser } from '../contexts/UserContext';

const PatientDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(null);
  const [userReports, setUserReports] = useState([]);
  const { userId , logout } = useUser();
  
  const handleLogout = () => {
    console.log('Logging out...');
    logout(); 
    navigate('/login');
  };

  
  useEffect(() => {

    console.log('Fetching user data for userId:', userId);
    if (!userId){
      navigate('/login');
      return;
    }

    getUserData(userId)
      .then(data => {
        console.log('User data fetched:', data);
        setUserData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        navigate('/login');
      });

    GetUserReports(userId)
      .then(reports => { 
        console.log('User reports fetched:', reports);
        setUserReports(reports);
      })
      .catch(error => { 
        console.error('Error fetching user reports:', error);
      });
      
  }, [userId, navigate]);

  if (!userData) {
    return <div>Loading...</div>; // or a loading spinner
  }


  return (
    <>
      <Navbar />

      <PageContainer>
        <DashboardContainer>
          <UserInfoSection>
            <DashboardHeader>
              <PatientName>{userData.FirstName}</PatientName>
              <EditButton>Edit</EditButton>
            </DashboardHeader>

            <PatientInfoGrid>
              <InfoCard>
                <InfoLabel>Birthdate</InfoLabel>
                <InfoValue>{userData.Birthdate}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>Phone Number</InfoLabel>
                <InfoValue>{userData.Phone}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>Email</InfoLabel>
                <InfoValue>{userData.Email}</InfoValue>
              </InfoCard>
              <InfoCard>
                <InfoLabel>Gender</InfoLabel>
                <InfoValue>{userData.Gender}</InfoValue>
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
              {
                userReports.length === 0 ? (
                  <h2>No reports available</h2>
                ) : (
                  userReports.map((report, i) => (
                    <ReportCard status={report.Status} key={i}>
                      <ReportHeader>
                        <ReportTitle>{`Report ${i + 1}`}</ReportTitle>
                        <ReportMeta>{report.ReportDate}</ReportMeta>
                      </ReportHeader>
                      <ViewReportButton status={report.Status} disabled={report.Status === 'Pending'} onClick={() => handleDownloadReport(report , userData)}>
                        {report.Status === 'Pending' ? 'Pending' : 'View Report'}
                      </ViewReportButton>
                    </ReportCard>
                  ))
                )
              }
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
