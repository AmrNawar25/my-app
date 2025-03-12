import React from "react";
import { SignUpContainer, FormContainer, StyledButton, SocialButtons, InputField, LeftPanel, ArtImage } from "../styles/SignUpStyles";
import eyeImage from "../assets/welcome-image.png"; // Update the path to your image

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <LeftPanel>
        <ArtImage src={eyeImage} alt="Artistic Eye" />
      </LeftPanel>
      <FormContainer>
        <h2>Create Account</h2>
        <div className="input-group">
          <InputField type="text" placeholder="First Name" />
          <InputField type="text" placeholder="Last Name" />
        </div>
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <StyledButton>Create Account</StyledButton>
        <div className="divider">
          <span>or</span>
        </div>
        <SocialButtons>
          <button className="facebook">Sign up with Facebook</button>
          <button className="google">Sign up with Google</button>
        </SocialButtons>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
