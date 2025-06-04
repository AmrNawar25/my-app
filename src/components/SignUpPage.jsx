import React, {useState} from "react";
import { SignUpContainer, FormContainer, StyledButton, SocialButtons, InputField, LeftPanel, ArtImage } from "../styles/SignUpStyles";
import eyeImage from "../assets/welcome-image.png"; // Update the path to your image
import {validateEmail , validatePassword , registerUser} from "../utils/AuthUtils"
import { useNavigate } from 'react-router-dom';
const SignUpPage = () => {

  const [formData, setFormData] = useState({
    FirstName : '',
    LastName:'',
    Email:'',
    Password:'',
    Gender:''
  });

  const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) =>{
      const {name , value} = e.target;
      setFormData(prev => ({...prev,[name]:value}));
    };

  const handelSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {}
    if (!formData.FirstName) newErrors.firstName = 'Required';
    if(!validateEmail(formData.Email)) newErrors.email = 'invalid email';
    if(!validatePassword(formData.Password)) newErrors.password = 'password must be 8+ characters'

    if (Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      return
    }

    try{
      const response = await registerUser(formData)

      console.log(response.body.message)
      if (response.status ===201){
        navigate('/PatientUpload')
      }
      else if (response.status === 400) {
        setErrors({email:"Email already used"})
      }
      else {
        setErrors({api:"Something went wrong. please try again"})
      }
    }catch(err){
      setErrors({api:err.message})
    }
  }
  return (
    <SignUpContainer>
      <LeftPanel>
        <ArtImage src={eyeImage} alt="Artistic Eye" />
      </LeftPanel>
      <FormContainer>
        <form onSubmit={handelSubmit}>
        <h2>Create Account</h2>
        <div className="input-group">
          <InputField type="text" name = "FirstName" placeholder="First Name" value= {formData.FirstName} onChange={handleChange} error = {errors.firstName}/>
          <InputField type="text" name = "LastName" placeholder="Last Name" vlaue = {formData.LastName} onChange={handleChange} error={errors.LastName}/>
        </div>
        <InputField type="email" name ="Email" placeholder="Email" vlaue = {formData.Email} onChange={handleChange}error={errors.Email} />
        {errors.email && <span className="error">{errors.email}</span>}
        <InputField type="password" name="Password" placeholder="Password" value={formData.Password} onChange={handleChange} error={errors.password}/>
        {errors.password && <span className="error">{errors.password}</span>}
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

        {errors.api && <span className="error">{errors.api}</span>}
        <StyledButton type="submit">Create Account</StyledButton>
        </form>
        <div className="divider">
        </div>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
