import React, { useState } from "react";
import {
  UploadContainer,
  UploadCard,
  UploadTitle,
  UploadInput,
  UploadButton,
  PreviewImage,
  Label,
  Loader,
  ResultText,
  ErrorText,
} from "../styles/PatientUploadStyles";
import { FaUpload, FaCheckCircle, FaExclamationTriangle, FaRedo } from "react-icons/fa";

const PatientUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setError(null);
      setResult(null);
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      setError("Please upload an image first.");
      return;
    }
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setResult("Possible fracture detected.");
    }, 3000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setLoading(false);
    setError(null);
    setResult(null);
  };

  return (
    <UploadContainer>
      <UploadCard>
        <UploadTitle>Upload Your X-ray Image</UploadTitle>

        {!selectedImage && (
          <>
            <Label htmlFor="imageUpload">
              <FaUpload style={{ marginRight: "6px" }} />
              Choose Image
            </Label>
            <UploadInput
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
            />
          </>
        )}

        {selectedImage && (
          <div style={{ marginTop: "1rem" }}>
            <PreviewImage src={selectedImage} alt="X-ray Preview" />
          </div>
        )}

        {loading && <Loader />}
        {error && (
          <ErrorText>
            <FaExclamationTriangle style={{ marginRight: "6px" }} />
            {error}
          </ErrorText>
        )}

        <UploadButton onClick={handleSubmit} disabled={loading || !selectedImage}>
          {loading ? "Processing..." : "Submit"}
        </UploadButton>

        {result && (
          <ResultText style={{ color: result.includes("fracture") ? "red" : "green" }}>
            <FaCheckCircle style={{ marginRight: "6px" }} />
            {result}
          </ResultText>
        )}

        {(selectedImage || result) && (
          <UploadButton onClick={handleReset} style={{ marginTop: "0.8rem", backgroundColor: "#777" }}>
            <FaRedo style={{ marginRight: "6px" }} />
            Upload Another
          </UploadButton>
        )}

        <small style={{ marginTop: "1.5rem", display: "block", fontSize: "0.85rem", color: "#666" }}>
          ⚠️ For accurate analysis, upload a clear X-ray image with no glare or blur.
        </small>
      </UploadCard>
    </UploadContainer>
  );
};

export default PatientUpload;
