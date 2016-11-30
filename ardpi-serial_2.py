
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


def SerRead():
	global serQ
	try:
		while True :
			ser = serial.Serial('/dev/ttyAMA0', 9600)
			ser.write("A")
			response = ser.readline()
			serQ.put(response)
	except KeyboardInterrupt:
		ser.close()


def SerDisplay():
	global serQ
	try:
		while True:
			datavals = serQ.get()
			serQ.task_done()
			datasplit=datavals.split(",")
			for n in datasplit:
				print n
				# if n!="":
				# 	if int(n)>8:
				# 		print n
				# else:
				# 	pass
	except KeyboardInterrupt:
		ser.close()

SerReadT= threading.Thread(name='SerRead', target=SerRead)
SerDisplayT= threading.Thread(name='SerDisplay', target=SerDisplay)


SerReadT.start()
SerDisplayT.start()

