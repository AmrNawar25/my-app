const GetUserReports = async (UserId) => {
    const response = await fetch(`http://localhost:5000/api/reports/user_reports/${UserId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch reports');
    }
    
    return await response.json();
}

const GetDoctorReports = async (DoctorId) => {
    const response = await fetch(`http://localhost:5000/api/reports/doctor/${DoctorId}`, {
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
    const response = await fetch(`http://localhost:5000/api/reports/${reportId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update report');
    }
    
    return await response.json();
}

module.exports = {
    GetUserReports,
    GetDoctorReports,
    EditReport
};
