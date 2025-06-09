import React, { useState, useEffect } from "react";
import {
  DashboardContainer,
  Sidebar,
  SidebarHeader,
  ToggleButton,
  ProfileSection,
  DoctorIcon,
  SidebarMenu,
  SidebarItem,
  MainContent,
  Cards,
  Card,
  ReportsSection,
  ReportCard,
  ReportTitle,
  ReportDetails,
} from "../styles/DoctorDashboardStyles";

import { FaBars, FaTimes, FaFileAlt, FaChartBar, FaCog } from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import XrayImage from "../assets/1.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock API call to fetch doctor personal data
const getDoctorData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        FirstName: "Neutron",
        LastName: "Smith",
        Email: "neutron.smith@hospital.com",
        Phone: "+1234567890",
        Birthdate: "1980-08-12",
        Gender: "Male",
      });
    }, 500);
  });

const DoctorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("reports"); // "reports", "charts", "settings"
  const [doctorData, setDoctorData] = useState(null);
  const navigate = useNavigate();

  // Pending reports data - replace with API call if you have backend
  const [pendingReports, setPendingReports] = useState([
    {
      id: "r1",
      patientName: "Sarah Connor",
      diseaseName: "Neural Degeneration",
      aiAnalysis:
        "CT Scan shows early signs of neural degeneration. Recommend further testing.",
    },
    {
      id: "r2",
      patientName: "John Doe",
      diseaseName: "Brain MRI Clean",
      aiAnalysis:
        "MRI clean. No abnormalities found. Scheduled for a 6-month follow-up.",
    },
    {
      id: "r3",
      patientName: "Jane Smith",
      diseaseName: "Frontal Lobe Anomaly",
      aiAnalysis:
        "Detected anomaly in the frontal lobe. Recommend AI cross-validation.",
    },
  ]);

  const [selectedReport, setSelectedReport] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false); // <-- Added state for expanded image

  useEffect(() => {
    getDoctorData().then((data) => setDoctorData(data));
  }, []);

  const handleLogout = () => {
    // clear auth here if needed
    navigate("/login");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openReportModal = (report) => {
    setSelectedReport(report);
  };

  const closeReportModal = () => {
    setSelectedReport(null);
    setIsImageExpanded(false); // Reset expanded image when modal closes
  };

  const handleAcceptReport = () => {
    alert(`Accepted report for ${selectedReport.patientName}`);
    // TODO: Add backend call to accept report here
    closeReportModal();
  };

  const handleEditReport = () => {
    alert(`Editing report for ${selectedReport.patientName}`);
    // TODO: Add logic to edit report (navigate or open form)
    closeReportModal();
  };

  // Reports Status Over Time (Accepted, Edited, Rejected)
  const reportsStatusData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Accepted",
        data: [10, 14, 12, 15, 13, 17],
        borderColor: "#c7973c",
        backgroundColor: "rgba(199,151,60,0.3)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Edited",
        data: [4, 5, 3, 6, 4, 7],
        borderColor: "#7c6236",
        backgroundColor: "rgba(124,98,54,0.3)",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Rejected",
        data: [1, 2, 1, 2, 1, 3],
        borderColor: "#b03a2e",
        backgroundColor: "rgba(176,58,46,0.3)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const reportsStatusOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#c7973c" } },
      title: {
        display: true,
        text: "Reports Status Over Time",
        color: "#c7973c",
        font: { size: 20 },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#c7973c" },
        grid: { color: "transparent" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#c7973c" },
        grid: { color: "rgba(199,151,60,0.2)" },
      },
    },
  };

  return (
    <DashboardContainer>
      <Sidebar $open={sidebarOpen}>
        <SidebarHeader>
          <ToggleButton onClick={toggleSidebar}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </ToggleButton>
        </SidebarHeader>

        {sidebarOpen && (
          <>
            <ProfileSection>
              <DoctorIcon />
              <h3>Dr. Neutron</h3>
            </ProfileSection>

            <SidebarMenu>
              <SidebarItem onClick={() => setActiveMenu("reports")}>
                <FaFileAlt /> Reports History
              </SidebarItem>
              <SidebarItem onClick={() => setActiveMenu("charts")}>
                <FaChartBar /> Charts
              </SidebarItem>
              <SidebarItem onClick={() => setActiveMenu("settings")}>
                <FaCog /> Settings
              </SidebarItem>
            </SidebarMenu>
          </>
        )}
      </Sidebar>

      <MainContent $sidebarOpen={sidebarOpen}>
        <h2>Welcome back, Dr. Neutron 👋</h2>

        {activeMenu === "reports" && (
          <>
            <Cards>
              <Card>🧠 124 Scans Analyzed</Card>
              <Card>📊 8 New Reports</Card>
            </Cards>

            <ReportsSection>
              <h3>Pending Reports</h3>

              {pendingReports.length === 0 && <p>No pending reports.</p>}

              {pendingReports.map((report) => (
                <ReportCard
                  key={report.id}
                  status="Pending"
                  style={{ marginBottom: "15px" }}
                >
                  <ReportTitle>{report.patientName}</ReportTitle>
                  <ReportDetails>{report.diseaseName}</ReportDetails>
                  <button
                    onClick={() => openReportModal(report)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 15px",
                      backgroundColor: "#c7973c",
                      border: "none",
                      borderRadius: "6px",
                      color: "#111",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    View AI Analysis
                  </button>
                </ReportCard>
              ))}

              {/* Modal Popup */}
              {selectedReport && (
                <div
                  onClick={closeReportModal}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                  }}
                >
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      backgroundColor: "#222",
                      padding: "25px",
                      borderRadius: "12px",
                      width: "400px",
                      color: "#c7973c",
                      boxShadow: "0 0 15px #c7973c",
                      position: "relative",
                    }}
                  >
                    <h3>
                      {selectedReport.patientName} - {selectedReport.diseaseName}
                    </h3>
                    <p
                      style={{
                        marginTop: "15px",
                        lineHeight: "1.4",
                        fontSize: "15px",
                        color: "#eee",
                        whiteSpace: "pre-wrap",
                        minHeight: "100px",
                      }}
                    >
                      {selectedReport.aiAnalysis}
                    </p>

                    {/* Clickable X-ray image */}
                    <img
                      src={XrayImage}
                      alt="X-ray"
                      style={{
                        width: "100%",
                        borderRadius: "8px",
                        marginTop: "15px",
                        objectFit: "contain",
                        maxHeight: "200px",
                        cursor: "pointer",
                        filter: isImageExpanded ? "brightness(0.8)" : "none",
                        transition: "filter 0.3s",
                      }}
                      onClick={() => setIsImageExpanded(true)}
                      onMouseOver={(e) => (e.currentTarget.style.filter = "brightness(0.8)")}
                    />

                    <div
                      style={{ display: "flex", gap: "10px", marginTop: "20px" }}
                    >
                      <button
                        onClick={handleAcceptReport}
                        style={{
                          flex: 1,
                          backgroundColor: "#3a7c3a",
                          color: "white",
                          border: "none",
                          borderRadius: "6px",
                          padding: "10px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Accept
                      </button>

                      <button
                        onClick={handleEditReport}
                        style={{
                          flex: 1,
                          backgroundColor: "#c7973c",
                          color: "#111",
                          border: "none",
                          borderRadius: "6px",
                          padding: "10px",
                          fontWeight: "bold",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                    </div>

                    <button
                      onClick={closeReportModal}
                      style={{
                        marginTop: "15px",
                        backgroundColor: "#555",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "8px 14px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                    >
                      Close
                    </button>
                  </div>

                  {/* Expanded image overlay */}
                  {isImageExpanded && (
                    <div
                      onClick={() => setIsImageExpanded(false)}
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.85)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1100,
                        cursor: "zoom-out",
                      }}
                    >
                      <img
                        src={XrayImage}
                        alt="Expanded X-ray"
                        style={{
                          maxWidth: "90vw",
                          maxHeight: "90vh",
                          borderRadius: "12px",
                          objectFit: "contain",
                          boxShadow: "0 0 15px #c7973c",
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </ReportsSection>
          </>
        )}

        {activeMenu === "charts" && (
          <>
            <ReportsSection>
              <Line data={reportsStatusData} options={reportsStatusOptions} />
            </ReportsSection>
          </>
        )}

        {activeMenu === "settings" && (
          <ReportsSection>
            <h3>Doctor Information</h3>
            {!doctorData && <p>Loading...</p>}
            {doctorData && (
              <div style={{ color: "#c7973c", lineHeight: "1.4" }}>
                <p>
                  <b>Name:</b> {doctorData.FirstName} {doctorData.LastName}
                </p>
                <p>
                  <b>Email:</b> {doctorData.Email}
                </p>
                <p>
                  <b>Phone:</b> {doctorData.Phone}
                </p>
                <p>
                  <b>Birthdate:</b> {doctorData.Birthdate}
                </p>
                <p>
                  <b>Gender:</b> {doctorData.Gender}
                </p>

                <button
                  onClick={handleLogout}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#b03a2e",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </ReportsSection>
        )}
      </MainContent>
    </DashboardContainer>
  );
};

export default DoctorDashboard;
