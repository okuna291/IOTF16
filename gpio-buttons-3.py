#!/usr/bin/env python


###############################################################
##DEBOUNCE INTERNAL PULLUP & INTERNAL PULLDOWN
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.IN, pull_up_down=GPIO.PUD_DOWN)
GPIO.setup(12, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(7,GPIO.IN)
GPIO.setup(12,GPIO.IN)
prev_input = 0
prev_input2 = 0
while True:
  input = GPIO.input(7)
  if ((not prev_input) and input):
    print("Button 7 pressed")
  prev_input = input

  input2 = GPIO.input(12)
  if (( prev_input2) and not input2):
    print("Button 12 pressed")
  prev_input2 = input2
  
  time.sleep(0.05)
GPIO.cleanup()