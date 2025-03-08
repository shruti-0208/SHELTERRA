import pandas as pd
import joblib


model = joblib.load(r'C:\Users\sdevk\Documents\shelterra\ml\landslide_model.pkl')

print("Model loaded successfully!")


new_data = pd.read_csv(r'C:\Users\sdevk\Documents\shelterra\ml\new_data.csv')


X_new = new_data.drop(columns=["Landslide"])  


predictions = model.predict(X_new)


print("Predictions:", predictions)
