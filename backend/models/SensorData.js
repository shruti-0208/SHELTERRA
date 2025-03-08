const mongoose = require("mongoose");

const SensorDataSchema = new mongoose.Schema({
    // temperature: Number,
    // humidity: Number,
    // soilMoisture: Number,
    tilt: Number,
    distance: Number,
    water: Number,
    xAngle: Number,
    yAngle: Number,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SensorData", SensorDataSchema);