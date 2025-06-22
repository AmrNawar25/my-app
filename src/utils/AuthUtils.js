// Validation utilities
const API_URL = process.env.REACT_APP_API_URL

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 8;
};


const loginUser = async (credentials) => {
  console.log(API_URL)
  const response = await fetch(`${API_URL}/api/auth/signinUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const body = await response.json();
  return {status : response.status , body};
};

const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/auth/signupUser`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  const body = await response.json();
  return {status: response.status , body};
};

const registerDoctor = async (doctorData) => {
  const response = await fetch(`${API_URL}/api/auth/signupDoctor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(doctorData)
  });
  const body = await response.json();
  return {status: response.status , body};
};

const loginDoctor = async (credentials) => {
  const response = await fetch(`${API_URL}/api/auth/signinDoctor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const body = await response.json();
  return {status : response.status ,body };
};

module.exports = {
  validateEmail,
  validatePassword,
  loginUser,
  registerUser,
  loginDoctor,
  registerDoctor
};