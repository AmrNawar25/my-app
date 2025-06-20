import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import {getDoctorData, getDoctorReportStatus , getDoctorWeeklyStatus} from "../utils/UserUtils";
import {GetDoctorReports ,EditReport } from "../utils/ReportsUtils";

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
// import XrayImage from "../assets/1.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DoctorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("reports"); 
  const [doctorData, setDoctorData] = useState(null);
  const { userId , logout } = useUser();
  const navigate = useNavigate();

  const [pendingReports, setPendingReports] = useState([]);


  const [selectedReport, setSelectedReport] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const [editReport, setEditReport] = useState(null);
  const [editFields, setEditFields] = useState({fidings: "", impression: ""});

  const [DoctorStatus , setDoctorStatus] = useState(null); 
  const [reportsStatusData, setReportsStatusData] = useState();

  useEffect(() => {
    console.log("Fetching doctor data for userId:", userId);
      if (!userId) {
        navigate("/login");
        return;
      }

    getDoctorData(userId)
      .then((data) => {
        console.log("Doctor data fetched:", data);
        setDoctorData(data);
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
        navigate("/login");
      });

    GetDoctorReports(userId)
      .then((reports) => {
        console.log("Doctor reports fetched:", reports);
        setPendingReports(reports);
      })
      .catch((error) => {
        console.error("Error fetching doctor reports:", error);
      });

    getDoctorReportStatus(userId)
      .then((status) => {
        console.log("Doctor report status fetched:", status);
        setDoctorStatus(status);
      })
      .catch((error) => {
        console.error("Error fetching doctor report status:", error);
      });

    getDoctorWeeklyStatus(userId)
      .then((weeklyStatus) => {
        console.log("Doctor weekly status fetched:", weeklyStatus);
        setReportsStatusData(weeklyStatus);
      })
      .catch((error) => {
        console.error("Error fetching doctor weekly status:", error);
      });

  }, [userId, navigate]);


  if (!doctorData || !DoctorStatus || !reportsStatusData) {
    return <div>Loading...</div>;
  }


  const handleLogout = () => {
    console.log("Logging out...");
    logout();
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
    setIsImageExpanded(false); 
  };

  const handleAcceptReport = async () => {
    alert(`Accepted report for ${selectedReport.UserId.FirstName} ${selectedReport.UserId.LastName}`);
    setEditFields({
      action: "accept",
    })

    try {
      const response = await EditReport(selectedReport._id, editFields);
      console.log(response);
      if (response.status === 200) {
        alert("Report accepted successfully!");
        setPendingReports((prevReports) =>
          prevReports.filter((report) => report._id !== selectedReport._id)
        );
      } else {
        alert("Failed to accept report. Please try again.");
      }
    } catch (error) {
      console.error("Error accepting report:", error);
      alert("An error occurred while accepting the report.");
    }
    closeReportModal();
    setSelectedReport(null);
  };

  const handleEditReport = () => {
    setEditReport(selectedReport);
    setEditFields({
      action : "edit",
      findings: selectedReport.Findings,
      impression: selectedReport.Impression,
    });
    setSelectedReport(null);
  };

  const handleSaveEdit = async () => {
    if ((!editFields.findings || !editFields.impression) && editFields.action === "edit") {
      alert("Please fill in all fields before saving.");
      return;
    }

    try {
      const response = await EditReport(editReport._id ,editFields)
      console.log(response)

      if (response.status === 200) {
        alert("Report updated successfully!");
        setEditReport(null);
        setPendingReports((prevReports) =>
          prevReports.filter((report) => report._id !== editReport._id)
        );
      } else {
        alert("Failed to update report. Please try again.");
      }
    }
    catch (error) {
      console.error("Error updating report:", error);
      alert("An error occurred while updating the report.");
    }
  }


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
              <h3>Dr. {`${doctorData.FirstName} ${doctorData.LastName}`}</h3>
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
        <h2>Welcome back, Dr. {`${doctorData.FirstName} ${doctorData.LastName}`} 👋</h2>
        {console.log("Doctor Status:", DoctorStatus)}
        {activeMenu === "reports" && (

          <>
            <Cards>
              <Card>{`🧠 ${String(DoctorStatus.analyzed ?? 0 )} Scans Analyzed`}</Card>
              <Card>{`📊 ${String(DoctorStatus.pending ?? 0 )} New Reports`}</Card>
            </Cards>

            <ReportsSection>
              <h3>Pending Reports</h3>

              {pendingReports.length === 0 && <p>No pending reports.</p>}

              {pendingReports.map((report) => (
                <ReportCard
                  key={report._id}
                  status="Pending"
                  style={{ marginBottom: "15px" }}
                >
                  <ReportTitle>{`${report.UserId.FirstName} ${report.UserId.LastName}`}</ReportTitle>
                  <ReportDetails>{report.Findings}</ReportDetails>
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
                      {selectedReport.UserId.FirstName} - {selectedReport.Findings}
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
                      {selectedReport.Impression}
                    </p>

                    {/* Clickable X-ray image */}
                    <img
                      src={`http://localhost:5000/${selectedReport.XrayImageId.ImageUrl}`}
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
                      {console.log("Expanded image URL:", selectedReport.XrayImageId.ImageUrl)}
                      <img
                        src={`http://localhost:5000/${selectedReport.XrayImageId.ImageUrl}`}
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

              {editReport && (
                <div
                  onClick={() => setEditReport(null)}
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
                    <h3>Edit Report</h3>
                    <label style={{ color: "#eee" }}>Findings</label>
                    <textarea
                      value={editFields.findings}
                      onChange={e => setEditFields({ ...editFields, findings: e.target.value })}
                      style={{
                        width: "100%",
                        minHeight: "60px",
                        marginBottom: "12px",
                        borderRadius: "6px",
                        border: "1px solid #c7973c",
                        padding: "8px",
                        background: "#333",
                        color: "#fff"
                      }}
                    />
                    <label style={{ color: "#eee" }}>Impression</label>
                    <textarea
                      value={editFields.impression}
                      onChange={e => setEditFields({ ...editFields, impression: e.target.value })}
                      style={{
                        width: "100%",
                        minHeight: "60px",
                        marginBottom: "12px",
                        borderRadius: "6px",
                        border: "1px solid #c7973c",
                        padding: "8px",
                        background: "#333",
                        color: "#fff"
                      }}
                    />
                    <button
                      onClick={handleSaveEdit}
                      style={{
                        backgroundColor: "#3a7c3a",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        width: "100%",
                        marginBottom: "10px"
                      }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditReport(null)}
                      style={{
                        backgroundColor: "#555",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "8px 14px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
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
