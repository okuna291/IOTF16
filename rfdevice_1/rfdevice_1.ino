

#include <RFduinoGZLL.h>

device_t role = DEVICE3;

// pin for the Green Led
int LEDpin = 4;
int xpin = 2;
int xval = 0;
int xvalp = 0;
double x;




void setup()
{
  Serial.begin(9600);
  pinMode(LEDpin, OUTPUT);
  pinMode(xpin, INPUT);
  RFduinoGZLL.txPowerLevel = 0;
  // start the GZLL stack
  RFduinoGZLL.begin(role);
}

void loop()
{
  char xdata[2];   //declaring character array
  char mydata[2];
  String xstr;
  String mystr;

  xval = digitalRead(xpin);

// xval = 1;
  xstr = String(xval);

  xstr.toCharArray(xdata, 2); //passing the value of the string to the character array
  mystr = xstr;
  mystr.toCharArray(mydata, 2);
  Serial.println(mydata);
  RFduinoGZLL.sendToHost(mydata, 2);
  delay(50);
}

