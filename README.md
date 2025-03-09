# ShelTerra
## **Project Overview** 🌍⛰️  

🚨 Problem Statement
In hilly regions, landslides pose a serious threat to life and infrastructure. Unstable land, triggered by rainfall, slope steepness, soil saturation, and other environmental factors, can collapse without warning. Early detection and prediction are crucial to saving lives and preventing disasters.

💡 Solution
We have developed a hardware-software integrated system that analyzes land stability in real-time. Our system collects sensor data and uses a Machine Learning model trained on landslide datasets to predict the risk of a landslide.

🛠️ Tech Stack & Implementation
🔹 Hardware Components
💧 Water Sensor → Checks soil moisture level (Soil Saturation)
📏 Tilt Sensor → Measures the slope angle
📡 Ultrasonic Sensor → Determines distance from the surface (for stability assessment)
🔹 Software & Backend
🧠 Machine Learning Model → Trained on landslide datasets with key factors:
Rainfall, Slope Angle, Soil Saturation, Vegetation Cover
Earthquake Activity, Proximity to Water, Soil Type
🖥️ Backend: Express.js (Node.js framework)
💾 Database: MongoDB (Stores real-time sensor data & predictions)
🖥️ Frontend: Next.js (React.js) for an interactive UI
🎨 Styling: Tailwind CSS for a clean and responsive design
🔐 Authentication: Clerk for secure access
🔄 Workflow
Sensors collect real-time data on slope stability.
Data is stored in MongoDB and sent to the backend.
Machine Learning model processes the data and predicts landslide risk.
Results are displayed on a Next.js frontend with an intuitive dashboard.
Users get alerts and warnings based on real-time analysis.
📌 Features
✅ Real-time sensor data collection
✅ AI-based risk prediction
✅ User-friendly dashboard
✅ Secure authentication with Clerk
✅ Cloud-based MongoDB storage

google drive link:https://drive.google.com/drive/folders/1-J-QJX_FJ1uL6B3zufM59cavrkv2QM-t
