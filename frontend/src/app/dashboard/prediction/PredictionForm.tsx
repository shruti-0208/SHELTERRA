"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PredictionForm({ onPrediction }: { onPrediction: (prediction: number) => void }) {
  const [formData, setFormData] = useState({
    Rainfall_mm: "",
    Slope_Angle: "",
    Soil_Saturation: "",
    Vegetation_Cover: "",
    Earthquake_Activity: "",
    Proximity_to_Water: "",
    Soil_Type_Gravel: "",
    Soil_Type_Sand: "",
    Soil_Type_Silt: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [predictionResult, setPredictionResult] = useState<number | null>(null);

  const parameterRanges: { [key: string]: { min: number; max: number; placeholder: string } } = {
    Rainfall_mm: { min: 0, max: 500, placeholder: "Rainfall in mm (0-500)" },
    Slope_Angle: { min: 0, max: 90, placeholder: "Slope in degrees (0-90)" },
    Soil_Saturation: { min: 0, max: 1, placeholder: "Soil saturation (0-1)" },
    Vegetation_Cover: { min: 0, max: 1, placeholder: "Vegetation cover (0-1)" },
    Earthquake_Activity: { min: 0, max: 10, placeholder: "Earthquake magnitude (0-10)" },
    Proximity_to_Water: { min: 0, max: 1, placeholder: "Distance to water (0-1)" },
    Soil_Type_Gravel: { min: 0, max: 1, placeholder: "1 for Gravel, 0 otherwise" },
    Soil_Type_Sand: { min: 0, max: 1, placeholder: "1 for Sand, 0 otherwise" },
    Soil_Type_Silt: { min: 0, max: 1, placeholder: "1 for Silt, 0 otherwise" },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const processedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => [key, value.trim() === "" ? null : parseFloat(value)])
    );
  
    if (Object.values(processedData).some((value) => value === null || isNaN(value as number))) {
      setError("⚠️ Please fill in all fields with valid numbers.");
      setLoading(false);
      return;
    }
  
    console.log("📤 Sending Data:", processedData); // ✅ Log Data Before Sending
  
    try {
      const response = await axios.post("https://shelterra-wugu.onrender.com/api/predict", processedData);

      
      console.log("✅ Response Received:", response.data); // ✅ Log Response
      
      if (response.data?.prediction !== undefined) {
        setPredictionResult(response.data.prediction);
        onPrediction(response.data.prediction);
      } else {
        setError("Unexpected response from the server.");
      }
    } catch (error) {
  console.error("❌ Error fetching prediction:", error);
  
  if (axios.isAxiosError(error) && error.response?.data?.error) {
    setError(error.response.data.error);
  } else {
    setError("❌ Failed to fetch prediction. Please try again.");
  }
}
 finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#cce7b0] to-[#556B2F] p-6">
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg w-full bg-white bg-opacity-90 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 transition-transform hover:scale-105 relative"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6B8E23] to-[#cce7b0] rounded-t-2xl"></div>
        
        <h2 className="text-2xl font-bold text-center text-[#556B2F]"> Enter Data for Prediction</h2>

        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-[#556B2F] mb-1">
              {key.replace(/_/g, " ")} ({parameterRanges[key].min} - {parameterRanges[key].max})
            </label>
            <Input
              type="number"
              name={key}
              value={formData[key as keyof typeof formData]}
              onChange={handleChange}
              required
              min={parameterRanges[key].min}
              max={parameterRanges[key].max}
              placeholder={parameterRanges[key].placeholder}
              className="p-2 border rounded-lg bg-white text-gray-900 shadow-md"
            />
          </div>
        ))}

        <Button 
          type="submit" 
          className="w-full bg-[#556B2F] text-white py-2 rounded-lg shadow-lg hover:bg-[#6B8E23] transition-all"
          disabled={loading}
        >
          {loading ? "🔄 Predicting..." : "📊 Predict"}
        </Button>

        {predictionResult !== null && (
          <div className="mt-4 p-3 bg-[#556B2F] text-white text-center rounded-md shadow-md">
            <strong>Prediction Result:</strong> {predictionResult === 1 ? "🚨 HIGH Risk" : "✅ LOW Risk"}
          </div>
        )}

        {error && (
          <div className="mt-4 p-3 bg-red-600 text-white text-center rounded-md shadow-md">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}
