import React, { useState } from "react";
import {
  SignUpContainer,
  FormContainer,
  StyledButton,
  SocialButtons,
  InputField,
  LeftPanel,
  ArtImage,
} from "../styles/SignUpStyles";
import { validateEmail, validatePassword, registerUser } from "../utils/AuthUtils";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/Image1.png"; // Importing the eye image


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    Role: "",
    FirstName: "",
    LastName: "",
    Phone: "",
    Birthdate: "",
    Gender: "",
    Email: "",
    Password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.Role) newErrors.role = "Role is required";
    if (!formData.FirstName) newErrors.firstName = "First name is required";
    if (!formData.Gender) newErrors.gender = "Gender is required";
    if (!formData.Birthdate) newErrors.birthdate = "Birthdate is required";
    if (!formData.Phone) newErrors.phone = "Phone is required";
    if (!validateEmail(formData.Email)) newErrors.email = "Invalid email";
    if (!validatePassword(formData.Password))
      newErrors.password = "Password must be 8+ characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await registerUser(formData);
      console.log(response.body.message);

      if (response.status === 201) {
        navigate("/PatientUpload");
      } else if (response.status === 400) {
        setErrors({ email: "Email already used" });
      } else {
        setErrors({ api: "Something went wrong. Please try again" });
      }
    } catch (err) {
      setErrors({ api: err.message });
    }
  };

  return (
    <SignUpContainer
      style={{
        paddingTop: "90px", // Adjust for navbar height so form is pushed down
      }}
    >
      <LeftPanel>
        <ArtImage src={Image1} alt="Artistic Eye" />
      </LeftPanel>
      <FormContainer>
        <form onSubmit={handelSubmit}>
          <h2>Create Account</h2>

          {/* Role Selector */}
          <div
            className="input-group"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              gap: "10px",
              marginRight: "70px",
            }}
          >
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
          </div>
          {errors.role && <span className="error">{errors.role}</span>}

          <div className="input-group">
            <InputField
              type="text"
              name="FirstName"
              placeholder="First Name"
              value={formData.FirstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              type="text"
              name="LastName"
              placeholder="Last Name"
              value={formData.LastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>

          <InputField
            type="text"
            name="Phone"
            placeholder="Phone Number"
            value={formData.Phone}
            onChange={handleChange}
            error={errors.phone}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <InputField
            type="date"
            name="Birthdate"
            placeholder="Birthdate"
            value={formData.Birthdate}
            onChange={handleChange}
            error={errors.birthdate}
          />
          {errors.birthdate && <span className="error">{errors.birthdate}</span>}

          {/* Gender Selector */}
          <div
            className="input-group"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              marginRight: "70px",
              gap: "10px",
            }}
          >
            <label
              htmlFor="gender"
              style={{
                color: "white",
                minWidth: "60px",
                fontWeight: "bold",
                textAlign: "right",
              }}
            >
              Gender:
            </label>
            <StyledButton
              type="button"
              onClick={() => handleSelect("Gender", "Male")}
              style={{
                backgroundColor: formData.Gender === "Male" ? "#c7973c" : "#333",
                color: formData.Gender === "Male" ? "#000" : "#fff",
                padding: "6px 12px",
                fontSize: "14px",
              }}
            >
              Male
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() => handleSelect("Gender", "Female")}
              style={{
                backgroundColor: formData.Gender === "Female" ? "#c7973c" : "#333",
                color: formData.Gender === "Female" ? "#000" : "#fff",
                padding: "6px 12px",
                fontSize: "14px",
              }}
            >
              Female
            </StyledButton>
          </div>
          {errors.gender && <span className="error">{errors.gender}</span>}

          <InputField
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={handleChange}
            error={errors.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <InputField
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.Password}
            onChange={handleChange}
            error={errors.password}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <p>
            Already have an account? <a href="/login">Login</a>
          </p>

          {errors.api && <span className="error">{errors.api}</span>}

          <StyledButton type="submit">Create Account</StyledButton>
        </form>
        <div className="divider"></div>
      </FormContainer>
    </SignUpContainer>
  );
};

export default SignUpPage;
