import React , {useState} from "react";
import { validateEmail , loginUser , loginDoctor } from "../utils/AuthUtils";
import { useNavigate } from 'react-router-dom';

import {
  Container,
  LeftContent,
  EyeImage,
  RightContent,
  Input,
  Button,
  ForgotPassword,
  ParticlesContainer,
  Particle,
  Line,
  StyledButton,
} from "../styles/LoginPageStyles";
import Image1 from "../assets/Image1.png"; // Importing the eye image
import { useUser } from "../contexts/UserContext";



const LoginPage = () => {
  const navigate = useNavigate();
  const {login} = useUser();

  const [formData , setFormData] = useState({
    Email : '',
    Password: ''
  })

  const [errors , setErrors] = useState({})

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData(prev => ({...prev,[name]:value}));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async(e) =>{

    e.preventDefault();

    const newErrors = {}

    if (!validateEmail(formData.Email)) newErrors.email = "Invalid email";
    if (Object.keys(newErrors).length >0){
      setErrors(newErrors)
      return
    }
    const UserRole = formData.Role;

    if (UserRole === "Patient") {

    try{
      const response = await loginUser(formData);
      
      if (response.status === 200){
        console.log("Login successful:", response);
        login(response.body.UserId , UserRole);
        console.log("Login successful, userId:", response.body.UserId);
        navigate('/patient-dashboard')
      }
      else if (response.status === 401 || response.statu === 400 ){
        setErrors({api:"Invalid login credentials"})
      }
      else{
        setErrors({api:"Something went wrong. please try again"})
      }
    }
    catch(err){
      setErrors({api:err.message})
    }

    } else if (UserRole === "Doctor") {
      try {
        const response = await loginDoctor(formData);
        
        if (response.status === 200) {
          console.log("Login successful:", response);
          login(response.body.doctorId , UserRole);
          console.log("Login successful, userId:", response.body.UserId);
          navigate('/doctor-dashboard');
        } else if (response.status === 401 || response.status === 400) {
          setErrors({ api: "Invalid login credentials" });
        } else {
          setErrors({ api: "Something went wrong. Please try again" });
        }
      } catch (err) {
        setErrors({ api: err.message });
      }
    }
  };

  return (
    <Container>
      {/* Left Side - Eye Image Animation */}
      <LeftContent>
        <EyeImage src={Image1} alt="Eye Animation" />
      </LeftContent>

      {/* Right Side - Login Form */}
      <RightContent>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <Input type="email" name = {"Email"}placeholder="Email" value={formData.Email} onChange={handleChange} error = {errors.email}/>
          {errors.email && <span className="error">{errors.email}</span>}
          <Input type="password" name = {"Password"} placeholder="Password" value ={formData.Password} onChange={handleChange}/>
          <label
              htmlFor="role"
              style={{
                color: "white",
                minWidth: "60px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
            Role:
          </label>
          <StyledButton
            type="button"
            onClick={() => handleSelect("Role", "Doctor")}
            style={{
              backgroundColor: formData.Role === "Doctor" ? "#c7973c" : "#333",
              color: formData.Role === "Doctor" ? "#000" : "#fff",
              padding: "6px 12px",
              fontSize: "14px",
            }}
          >
            Doctor
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => handleSelect("Role", "Patient")}
            style={{
              backgroundColor: formData.Role === "Patient" ? "#c7973c" : "#333",
              color: formData.Role === "Patient" ? "#000" : "#fff",
              padding: "6px 12px",
              fontSize: "14px",
            }}
          >
            Patient
          </StyledButton>
          {errors.api && <span className="error">{errors.api}</span>}

          <ForgotPassword href="#">Forgot Password?</ForgotPassword>
          <Button type= "submit">Login</Button>
        </form>
      </RightContent>

      {/* AI Particles */}
      <ParticlesContainer>
        <Particle top="20%" left="30%" size="15px" duration="4s" />
        <Particle top="50%" left="70%" size="10px" duration="3s" />
        <Particle top="80%" left="40%" size="12px" duration="5s" />

        {/* Connection Lines */}
        <Line top="30%" left="35%" width="100px" />
        <Line top="60%" left="65%" width="120px" />
      </ParticlesContainer>
    </Container>
  );
};

export default LoginPage;
