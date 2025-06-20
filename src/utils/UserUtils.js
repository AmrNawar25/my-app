const getUserData = async (userId) =>{
    const response = await fetch(`http://localhost:5000/api/users/userData/${userId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    
    return response.json();
}

const getDoctorData = async (doctorId) => {
    const response = await fetch(`http://localhost:5000/api/doctors/doctorData/${doctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch doctor data');
    }

    return response.json();
}

const getDoctorReportStatus = async (doctorId) => {
    const response = await fetch(`http://localhost:5000/api/doctors/doctorReportStatsSummary/${doctorId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch doctor report status');
    }
    return response.json();
}

const getDoctorWeeklyStatus = async (doctorId) => {
    const response = await fetch(`http://localhost:5000/api/doctors/doctorWeeklyStatus/${doctorId}`, {
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