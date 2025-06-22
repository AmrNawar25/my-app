import jsPDF from "jspdf";
import format from "date-fns/format";

const API_URL = process.env.REACT_APP_API_URL

const GetUserReports = async (UserId) => {
    const response = await fetch(`${API_URL}/api/reports/user_reports/${UserId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.status === 404) {
            return [];
    }
    
    if (!response.ok) {
        
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch reports');
    }
    return await response.json();
}

const GetDoctorReports = async (DoctorId) => {
    const response = await fetch(`${API_URL}/api/reports/doctor_reports/${DoctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch doctor reports');
    }
    
    return await response.json();
}

const EditReport = async (reportId, updatedData) => {
    const response = await fetch(`${API_URL}/api/reports/edit_report/${reportId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update report');
    }
    const body = await response.json();
    return  {
        status: response.status,
        body: body
    };
}


const handleDownloadReport = async (report, userData) => {
  try {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");
    doc.text("Radiology Report", 105, 20, { align: "center" });

    // Horizontal line
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    // Patient Information Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Patient Information", 10, 35);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${userData.FirstName} ${userData.LastName}`, 10, 43);
    doc.text(`Gender: ${userData.Gender}`, 10, 51);
    doc.text(`Referring Physician: Dr. ${report.DoctorName || report.DoctorId || "N/A"}`, 10, 59);

    // Right-aligned fields
    doc.text(`Date of Birth: ${userData.Birthdate}`, 140, 43);
    const studyDate = report.ReportDate ? format(new Date(report.ReportDate), "yyyy-MM-dd") : "N/A";
    doc.text(`Date of Study: ${studyDate}`, 140, 59);

    // Findings
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Findings", 10, 70);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(report.Findings || "N/A", 10, 78, { maxWidth: 190 });

    // Impressions
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Impressions", 10, 92);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(report.Impression || "N/A", 10, 100, { maxWidth: 190 });

    // Save the PDF
    const fileName = `Radiology_Report_${userData.FirstName}_${userData.LastName}_${report._id || ""}.pdf`;
    doc.save(fileName);

  } catch (err) {
    alert("Could not generate PDF.");
    console.error(err);
  }
};

export  {
    GetUserReports,
    GetDoctorReports,
    EditReport,
    handleDownloadReport
};
