import React , {useState} from "react";
import { validateEmail , loginUser } from "../utils/AuthUtils";
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
} from "../styles/LoginPageStyles";
import Image1 from "../assets/Image1.png"; // Importing the eye image
const LoginPage = () => {
  const navigate = useNavigate();

  const [formData , setFormData] = useState({
    Email : '',
    Password: ''
  })

  const [errors , setErrors] = useState({})

  const handleChange = (e) =>{
    const {name , value} = e.target;
    setFormData(prev => ({...prev,[name]:value}));
  };

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const newErrors = {}

    if (!validateEmail(formData.Email)) newErrors.email = "Invalid email";
    if (Object.keys(newErrors).length >0){
      setErrors(newErrors)
      return
    }

    try{
      const response = await loginUser(formData);

      console.log(response.status)

      if (response.status === 200){
        navigate('/PatientUpload')
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
