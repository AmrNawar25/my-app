import React, { useState } from "react";
import { analyzeXray } from "../utils/uploadPageUtils"

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
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setUploadedImage(file);
      setError(null);
      setResult(null);
    }
  };

  const handleSubmit = async  () => {
    if (!selectedImage) {
      setError("Please upload an image first.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      // Call API
      const { predicted_disease, impression, recommendation } = await analyzeXray(uploadedImage); 
      
      // Format and set result
      setResult({
        disease : predicted_disease,
        impression : impression,
        recommendation:recommendation
      });
    } catch (err) {
      setError("Analysis failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
          <ResultText style={{ color: result.disease ? "white" : "green" }}>
          <FaCheckCircle style={{ marginRight: "6px" }} />
          Diagnosis: {result.disease}
          
          {result.impression && (
            <div style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
            Impression: {result.impression}
            </div>
          )}
          {result.recommendation && (
            <div style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>
            Recommendation: {result.recommendation}
            </div>
          )}
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
