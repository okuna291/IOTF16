/*
This sketch demonstrates how to send data from a Device
to another Device (using the Host as an intermediary)
in a Gazell network.

When Button A on Device0 is pressed and released,
the green led on Device1 will toggle.
*/

#include <RFduinoGZLL.h> // include rfduino library

device_t role = HOST; // set Device name... DEVICE2 to DEVICE7 / HOST

void setup()
{
  Serial.begin(9600); // begin serial communications
  // start the GZLL stack  
  RFduinoGZLL.begin(role); // begin BLE communications
}

void loop()
{
}

void RFduinoGZLL_onReceive(device_t device, int rssi, char *data, int len) // this function receives BLE communications
{

//  if (data[0]==97){ // if first character is a (ascci code 97) then print out the data
  
  Serial.print(device); // print the device name
  Serial.print(","); 
  Serial.print(abs(rssi)); // print distance from device to host
  Serial.print(",");
  Serial.println(data); // print out data
//  Serial.print(",");
//  Serial.print(len); // print out lenght of recived data buffer
 
  
  
  if (device == DEVICE1)  // if device name is DEVICE1 relay the last known state to DEVICE1
    RFduinoGZLL.sendToDevice(device, "data from host");
//}
}
