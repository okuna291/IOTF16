int sensorValue[5];

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  pinMode(12,OUTPUT);
  pinMode(13,OUTPUT);
  pinMode(2,INPUT);
  pinMode(3,INPUT);
}



//
void loop() {
int digValue2= digitalRead(2);
int digValue3= digitalRead(3);
  
 for (int i=0;i<5;i++){
  sensorValue[i] = analogRead(i);
  Serial.print(sensorValue[i]); 
  Serial.print(",");
  }
  sensorValue[5] = analogRead(5);
  Serial.print (sensorValue[5]);
  Serial.print(",");
  Serial.print(digValue2);
  Serial.print(",");
  Serial.println(digValue3);

  
if (Serial.available() > 0) {
//char incoming = Serial.read();

String incoming = Serial.readStringUntil('\n');
Serial.println(incoming);
if (incoming=="red ON"){
  digitalWrite(12,HIGH);
  }
if (incoming=="red OFF"){
  digitalWrite(12,LOW);
  }

if (incoming=="green ON"){
  digitalWrite(13,HIGH);
  }
if (incoming=="green OFF"){
  digitalWrite(13,LOW);
  }
}
}
