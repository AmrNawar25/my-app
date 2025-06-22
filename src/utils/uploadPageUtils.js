// src/utils/api/xrayAPI.js

const API_URL = process.env.REACT_APP_API_URL

const analyzeXray = async (imageFile , userId) => {
    const formData = new FormData();
    formData.append('file', imageFile);
  
    const response = await fetch(`${API_URL}/api/model/process_image/${userId}`, {
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