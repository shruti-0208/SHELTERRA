from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

# Load the trained model
model = joblib.load("landslide_model.pkl")

@app.route("/")
def home():
    return "Landslide Prediction API is running!"

@app.route("/mlmodel", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        print("📥 Incoming Request from Express:", data)  # ✅ Log Data from Express

        df = pd.DataFrame([data])

        required_columns = ["Rainfall_mm", "Slope_Angle", "Soil_Saturation",
                            "Vegetation_Cover", "Earthquake_Activity", "Proximity_to_Water",
                            "Soil_Type_Gravel", "Soil_Type_Sand", "Soil_Type_Silt"]

        if not all(col in df.columns for col in required_columns):
            print("❌ Error: Invalid Input Features")  # ✅ Log Error
            return jsonify({"error": "Invalid input features"}), 400

        prediction = model.predict(df)

        print("✅ Prediction Result:", prediction[0])  # ✅ Log Prediction Result
        return jsonify({"prediction": int(prediction[0])})

    except Exception as e:
        print("❌ Flask Error:", str(e))  # ✅ Log Error Details
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
