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

module.exports = {
    getUserData
};