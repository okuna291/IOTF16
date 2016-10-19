/*
This sketch demonstrates how to coordinate data
between 3 devices in a Gazell network.

The host collects RSSI samples from the Devices,
and determines which device has the strongest
average RSSI (ie: the Device that is closest
to the Host).  The Green led is set on the
closest Device.

Since the Device must initiate communication, the
device "polls" the Host evey 200ms.
*/

#include <RFduinoGZLL.h> // include rfduino library
device_t role = DEVICE2; // set Device name... DEVICE2 to DEVICE7 / HOST

//define pins

int LEDpin2 = 3;

int xpin = 2;
int ypin = 4;
int zpin = 6;

int xval = 0;
int yval = 0;
int zval = 0;

int xvalp = 0;
int yvalp = 0;
int zvalp = 0;


void setup()
{
  Serial.begin(9600); // begin serial communications
 
  pinMode(LEDpin2, OUTPUT);
  pinMode(xpin, INPUT);
  pinMode(ypin, INPUT);
  pinMode(zpin, INPUT);

  RFduinoGZLL.txPowerLevel = 0;

  // start the GZLL stack
  RFduinoGZLL.begin(role); // begin BLE communications
}

void loop()
{
  char xdata[4];   //declaring character array -- 3 characters plus a nill charachter as terminator
  char ydata[4];
  char zdata[4];
  char mydata[15]; // declare mydata array

  String xstr;//declaring string
  String ystr;//declaring string
  String zstr;//declaring string
  String mystr;

  xval = analogRead(xpin); // read pin sensor values and place into variavles
  yval = analogRead(ypin);
  zval = analogRead(zpin);

  // convert sendor values to 3 characters.. i.e. value 2 converts to 002, value 40 converts to 040
  if (xval >= 100)
  {
    xstr = String(xval);
  }
  else if (xval < 100 && xval >= 10) {
    xstr = String(0) + String(xval);
  }
  else if (xval < 10) {
    xstr = String(0) + String(0) + String(xval);
  }
  
  
  if (yval >= 100)
  {
    ystr = String(yval);
  }
  else if (yval < 100 && yval >= 10) {
    ystr = String(0) + String(yval);
  }
  else if (yval < 10) {
    ystr = String(0) + String(0) + String(yval);
  }
  
  
  if (zval >= 100)
  {
    zstr = String(zval);
  }
  else if (zval < 100 && zval >= 10) {
    zstr = String(0) + String(zval);
  }
  else if (xval < 10) {
    zstr = String(0) + String(0) + String(zval);
  }

  xstr.toCharArray(xdata, 4); //passing the string value of sensors to the character array
  ystr.toCharArray(ydata, 4);
  zstr.toCharArray(zdata, 4);

  mystr = "a," + xstr+"," + ystr+"," + zstr; // combining data for sending to other rfduino... change "a" to other characters to identify message package

  mystr.toCharArray(mydata, 15); // place mystr data into character buffer

  Serial.println(mystr); // print buffer to serial

 RFduinoGZLL.sendToHost(mydata, 15); // send buffer to host other rfduino
    delay(250);
}

// if data is recived from another rfduino
void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len)
{
  // ignore acknowledgement without payload
  if (len > 0)
  {
    // set the Green led if this device is the closest device
    device_t closest_device = (device_t)data[0];
    //digitalWrite(green_led, (role == closest_device));
  }
}
