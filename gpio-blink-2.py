#!/usr/bin/env python
import RPi.GPIO as GPIO  
import time  



#function blink
GPIO.setmode(GPIO.BOARD)  #to use Raspberry Pi board pin numbers  
GPIO.setup(11, GPIO.OUT) #set up GPIO output channel   
def blink(pin):  
        GPIO.output(pin,GPIO.HIGH)  
        time.sleep(1)  
        GPIO.output(pin,GPIO.LOW)  
        time.sleep(1)  
        return  

#blink GPIO17 50 times  
for i in range(0,5):  
        blink(11)  
GPIO.cleanup()
