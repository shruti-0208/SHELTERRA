import serial
import json
from pymongo import MongoClient

# MongoDB Atlas Connection
MONGO_URI = "mongodb+srv://0802shruti04:kZpEOuy0cSfaRVRY@cluster0.ainsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
client = MongoClient(MONGO_URI)
db = client["landslide_db"]  # Database Name
collection = db["sensor_data"]  # Collection Name

# Serial Port for Arduino (Change COM Port if needed)
arduino = serial.Serial('COM4', 9600, timeout=1)

print("Reading data from Arduino...")

while True:
    try:
        data = arduino.readline().decode('utf-8').strip()
        if data:
            sensor_data = json.loads(data)  # Convert JSON String to Python Dictionary
            collection.insert_one(sensor_data)  # Store in MongoDB
            print("Data Stored:", sensor_data)
    except Exception as e:
        print("Error:", e)