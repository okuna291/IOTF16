#!/usr/bin/env python
import RPi.GPIO as GPIO  
import time  




##########################################
#simple blink
GPIO.setmode(GPIO.BOARD)  #to use Raspberry Pi board pin numbers  
GPIO.setup(11, GPIO.OUT) #set up GPIO output channel 

#blinking
GPIO.output(11,GPIO.HIGH)
time.sleep(2)
GPIO.output(11,GPIO.LOW)
time.sleep(2)
GPIO.output(11,GPIO.HIGH)


