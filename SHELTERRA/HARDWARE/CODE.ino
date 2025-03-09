#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_ADXL345_U.h>
#include <math.h>

#define WATER_SENSOR_PIN A0

Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);

void setup() {
  Serial.begin(9600);
  pinMode(WATER_SENSOR_PIN, INPUT);

  if (!accel.begin()) {
    Serial.println("ADXL345 not detected.");
    while (1);
  }
}

void loop() {
  // 🔹 Water Sensor (0-1 Scaling)
  int waterRaw = analogRead(WATER_SENSOR_PIN);
  float waterLevel = waterRaw / 1023.0;

  // 🔹 Accelerometer (ADXL345)
  sensors_event_t event;
  accel.getEvent(&event);
  float x = event.acceleration.x;
  float z = event.acceleration.z;

  // 🔹 Calculate Slope Angle (Inclination in Degrees)
  float slope_angle = atan2(x, z) * (180.0 / M_PI);

  // 🔹 Serial Output in JSON Format
  Serial.print("{\"water\":"); Serial.print(waterLevel);
  Serial.print(", \"slope_angle\":"); Serial.print(slope_angle);
  Serial.println("}");

  delay(1000);
}
