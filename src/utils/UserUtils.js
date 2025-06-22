const API_URL = process.env.REACT_APP_API_URL

const getUserData = async (userId) =>{
    const response = await fetch(`${API_URL}/api/users/userData/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    
    return response.json();
}

const getDoctorData = async (doctorId) => {
    const response = await fetch(`${API_URL}/api/doctors/doctorData/${doctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch doctor data');
    }

    return response.json();
}

const getDoctorReportStatus = async (doctorId) => {
    const response = await fetch(`${API_URL}/api/doctors/doctorReportStatsSummary/${doctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch doctor report status');
    }
    return response.json();
}

const getDoctorWeeklyStatus = async (doctorId) => {
    const response = await fetch(`${API_URL}/api/doctors/doctorWeeklyStatus/${doctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch doctor weekly status');
    }
    return response.json();
}


module.exports = {
    getUserData,
    getDoctorData,
    getDoctorReportStatus,
    getDoctorWeeklyStatus,
};