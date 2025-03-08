const mongoose = require("mongoose");

const predictionSchema = new mongoose.Schema({
  Rainfall_mm: Number,
  Slope_Angle: Number,
  Soil_Saturation: Number,
  Vegetation_Cover: Number,
  Earthquake_Activity: Number,
  Proximity_to_Water: Number,
  Soil_Type_Gravel: Number,
  Soil_Type_Sand: Number,
  Soil_Type_Silt: Number,
  prediction: Number, // Stores the ML prediction result (0 or 1)
}, { timestamps: true });

module.exports = mongoose.model("Prediction", predictionSchema);
