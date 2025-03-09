const express = require("express");
const axios = require("axios");
const Prediction = require("../models/Prediction");

const router = express.Router();

// ✅ ML Model API URL (Render Flask API)
const mlApiUrl = "https://shelterra-2.onrender.com/mlmodel"; //  Updated with actual Render URL

// Route to store data and send it to the ML model
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Request from Frontend:", req.body); // ✅ Log Incoming Data

    let requestData = req.body;
    requestData = Object.fromEntries(
      Object.entries(requestData).map(([key, value]) => [key, parseFloat(value)])
    );

    // Store data in MongoDB
    const newPrediction = new Prediction(requestData);
    await newPrediction.save();

    console.log("📡 Sending Data to Flask:", requestData); // ✅ Log Data Sent to Flask

    // ✅ Send data to Flask Model (Render API)
    const response = await axios.post(mlApiUrl, requestData);

    console.log("✅ Flask Response:", response.data); // ✅ Log Flask Response

    if (response.data && response.data.prediction !== undefined) {
      newPrediction.prediction = response.data.prediction;
      await newPrediction.save();

      return res.json({ success: true, prediction: response.data.prediction });
    } else {
      console.error("Unexpected response from ML model:", response.data);
      return res.status(500).json({ error: "Unexpected response from ML model" });
    }
  } catch (error) {
    console.error("❌ Error processing prediction:", error.response ? error.response.data : error.message);
    return res.status(500).json({ error: "Failed to process prediction" });
  }
});

// Route to get all predictions from MongoDB
router.get("/", async (req, res) => {
  try {
    const predictions = await Prediction.find();
    res.json(predictions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch predictions" });
  }
});

module.exports = router;
