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

export const HomeButtonWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

export const HomeButton = styled.button`
  background: linear-gradient(135deg, ${goldDark} 0%, ${goldLight} 100%);
  color: ${darkBg};
  border: none;
  padding: 10px 30px;
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.5);
  }
`;

export const DashboardContainer = styled.div`
  background: ${darkBg};
  padding: 0rem;
  padding-top: 100px;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
`;

export const UserInfoSection = styled.section`
  background: ${cardBg};
  border-radius: 12px;
  padding: 2rem;
  height: fit-content;
  position: sticky;
  top: 120px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ReportsSection = styled.section`
  background: ${darkBg};
  border-radius: 12px;
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
  background: ${props => props.status === 'Pending' 
    ? `linear-gradient(135deg, #F5CE42 0%, #FFD700 100%)` 
    : `linear-gradient(135deg, ${goldDark} 0%, ${goldAccent} 100%)`};
  color: ${darkBg};
  border: none;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  cursor: ${props => props.status === 'Pending' ? 'not-allowed' : 'pointer'};
  font-weight: 600;
  width: 100%;
  margin-top: 1rem;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    transform: ${props => props.status === 'Pending' ? 'none' : 'translateY(-2px)'};
    box-shadow: ${props => props.status === 'Pending' 
      ? 'none' 
      : '0 4px 12px rgba(212, 175, 55, 0.4)'};
  }
`;