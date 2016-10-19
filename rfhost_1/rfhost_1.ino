
#include <RFduinoGZLL.h>

device_t role = HOST;
char state = 0;
int LEDpin = 2;

void setup()
{
  Serial.begin(9600);
  pinMode(LEDpin, OUTPUT);
  // start the GZLL stack
  RFduinoGZLL.begin(role);
}

void loop()
{
  //  digitalWrite(LEDpin,HIGH);

}

void on() {
  digitalWrite(LEDpin, HIGH);
}
void off() {
  digitalWrite(LEDpin, LOW);
}

void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len)
{
  Serial.println(data);

  if (data[0] == '1') {
    digitalWrite(LEDpin, HIGH);
  } else {
    digitalWrite(LEDpin, LOW);
  }
}
