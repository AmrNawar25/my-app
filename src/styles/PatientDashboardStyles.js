import styled from 'styled-components';

// Gold Color Palette
const goldDark = '#D4AF37';
const goldLight = '#FFD700';
const goldAccent = '#F5CE42';
const darkBg = '#1A1A1A';
const lightText = '#F5F5F5';
const cardBg = '#2A2A2A';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${darkBg};
  padding: 0;
  margin: 0;
`;

export const DashboardContainer = styled.div`
  background: ${darkBg};
  padding-top: 100px;
  margin: 0 auto;
  min-height: 100vh;
  width: 90%;
  max-width: 1400px;
  font-family: 'Montserrat', sans-serif;
  display: flex;           /* Changed from grid to flex */
  flex-direction: column;  /* Vertical layout */
`;

export const UserInfoSection = styled.section`
  background: ${cardBg};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ReportsSection = styled.section`
  background: ${darkBg};
  border-radius: 12px;
  flex-grow: 1; /* Make it take remaining vertical space */
`;

export const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.3);
`;

export const PatientName = styled.h2`
  font-size: 2rem;
  color: ${goldLight};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &::before {
    content: '👤';
    font-size: 1.8rem;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(135deg, ${goldDark} 0%, ${goldAccent} 100%);
  color: ${darkBg};
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(212, 175, 55, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.5);
  }
`;

export const PatientInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

export const InfoCard = styled.div`
  background: ${darkBg};
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid ${goldLight};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(212, 175, 55, 0.2);
  }
`;

export const InfoLabel = styled.p`
  color: ${goldAccent};
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

export const InfoValue = styled.p`
  color: ${lightText};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

export const SectionTitle = styled.h3`
  font-size: 1.6rem;
  color: ${goldLight};
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::before {
    content: '📜';
    font-size: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, ${goldDark}, transparent);
  }
`;

export const UploadReportWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UploadReportButton = styled.button`
  background-color: #2980b9;
  color: white;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #2471a3;
  }
`;

export const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

export const ReportCard = styled.div`
  background: ${cardBg};
  border-radius: 12px;
  margin: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-top: 3px solid ${props => 
    props.status === 'Pending' ? '#F5CE42' : '#D4AF37'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(212, 175, 55, 0.3);
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ReportTitle = styled.h4`
  margin: 0;
  color: ${goldLight};
  font-size: 1.2rem;
  font-weight: 600;
`;

export const ReportMeta = styled.div`
  color: rgba(245, 245, 245, 0.7);
  font-size: 0.85rem;
`;
export const ViewReportButton = styled.button`
  background-color: ${props => 
    props.status === 'Pending' ? '#7f8c8d' : '#27ae60'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: ${props => 
      props.status === 'Pending' ? '#95a5a6' : '#2ecc71'};
    transform: ${props => 
      props.status === 'Pending' ? 'none' : 'translateY(-2px)'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const LogoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 2rem 0;
`;

export const LogoutButton = styled.button`
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(231, 76, 60, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;