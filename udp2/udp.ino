/*
  AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

 This example code is in the public domain.
 */

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int ax = map(analogRead(A0),0,1023,-50,50);
  int ay = map(analogRead(A1),0,1023,-50,50);
  // print out the value you read:
  Serial.print(random(0,255));
  Serial.print(",");
  Serial.print(random(0,255));
   Serial.print(",");
  Serial.print(random(0,255));
   Serial.print(",");
  Serial.print(ax);
   Serial.print(",");
  Serial.print(ay);
   Serial.print(",");
  Serial.print(random(30,50));
   Serial.print(",");
  Serial.println(random(2,2));
  
  delay(5);        // delay in between reads for stability
}
