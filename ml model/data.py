import pandas as pd


data = {
    "Rainfall_mm": [120.5, 85.3, 200.7, 150.2, 90.6],
    "Slope_Angle": [30, 25, 40, 35, 20],
    "Soil_Saturation": [0.7, 0.5, 0.9, 0.8, 0.6],
    "Vegetation_Cover": [0.4, 0.6, 0.3, 0.5, 0.7],
    "Earthquake_Activity": [3.2, 2.8, 4.5, 3.9, 2.5],
    "Proximity_to_Water": [0.2, 0.5, 0.1, 0.3, 0.4],
    "Landslide": [1, 0, 1, 1, 0],
    "Soil_Type_Gravel": [1, 0, 0, 1, 0],
    "Soil_Type_Sand": [0, 1, 0, 0, 1],
    "Soil_Type_Silt": [0, 0, 1, 0, 0]
}

df = pd.DataFrame(data)


df.to_csv("new_data.csv", index=False)

print("✅ 'new_data.csv' created successfully!")
