import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib  


file_path = r"C:\Users\sdevk\Documents\shelterra\ml\landslide_dataset.csv"
df = pd.read_csv(file_path)



df.fillna(df.mean(), inplace=True)


X = df.drop(columns=["Landslide"])
y = df["Landslide"]


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)


joblib.dump(model, 'landslide_model.pkl')  
print("Model saved as 'landslide_model.pkl'")


y_pred = model.predict(X_test)
print(f"Model Accuracy: {accuracy_score(y_test, y_pred):.2f}")
import joblib
joblib.dump(model, "landslide_model.pkl")

