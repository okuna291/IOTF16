#!/usr/local/bin/python
# Reading an analogue sensor with
# a single GPIO pin

print ("RC time")
import RPi.GPIO as GPIO, time

# Tell the GPIO library to use
# Broadcom GPIO references
GPIO.setmode(GPIO.BCM)

# Define function to measure charge time
def RCtime (RCpin):
  measurement = 0
  # Discharge capacitor
  GPIO.setup(RCpin, GPIO.OUT)
  GPIO.output(RCpin, GPIO.LOW)
  time.sleep(0.1)

  GPIO.setup(RCpin, GPIO.IN)
  # Count loops until voltage across
  # capacitor reads high on GPIO
  while (GPIO.input(RCpin) == GPIO.LOW):
    measurement += 1

  return measurement

# Main loop
while True:
  print RCtime(4) # Measure timing using GPIO4