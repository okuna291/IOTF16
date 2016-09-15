#!/usr/local/bin/python


##############################
##FADE LED

import RPi.GPIO as GPIO, time

GPIO.setmode(GPIO.BCM)
GPIO.setup(4,GPIO.OUT)
p=GPIO.PWM(4,50) # channel=12 frequency=50hz
p.start(0)

try:
  while True:
    for dc in range(0,101,5):
      p.ChangeDutyCycle(dc)
      time.sleep(0.1)
    for dc in range(100,-1,-5):
      p.ChangeDutyCycle(dc)
      time.sleep(0.1)
finally:
  p.stop()
  GPIO.cleanup()
