
import threading
from Queue import Queue
import os
import math
import time
import serial
import sys
import string, socket, select
import RPi.GPIO as GPIO
serdata=""
serQ=Queue(20)






try:
	while True :
		ser = serial.Serial('/dev/ttyAMA0', 9600)
		response = ser.readline()
		print response
except KeyboardInterrupt:
	ser.close()


