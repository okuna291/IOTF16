int sensorValue[5];

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
}


void loop() {
  for (int i=0;i<5;i++){
  sensorValue[i] = analogRead(i);
  Serial.print(sensorValue[i]); 
  Serial.print(",");
  }
  sensorValue[5] = analogRead(5);
  Serial.println (sensorValue[5]);
  //delay(100);
}



