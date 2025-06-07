// src/utils/api/xrayAPI.js
const analyzeXray = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
  
    const response = await fetch('http://localhost:5000/api/model/process_image', {
      method: 'POST',
      body: formData,
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Analysis failed');
    }
  
    return await response.json(); 
};

module.exports={
    analyzeXray
}