#!/usr/bin/env python

############## UNREAD EMAIL COUNTER ##############
## counts unread emails every 5 seconds and returns number of unread emails


import feedparser       # imports feedparser to parse XML feed
import time     # imports time

user='youremail@gmail.com'      # replace *** with your personal gmail user, or youruser@newschool.edu for your school account
passwd='****'        # replace *** with your password for the above account

while True:     #loop forever ---- to exit use keys "ctr+c"
    newmails = int(feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom")["feed"]["fullcount"])
    
    def emailcount(n): #define function emailcount
        if n > 0: # if you have over 0 emails. You can change this based on how many emails you currently have unread in your inbox
            print "you have "+str(n)+" new email(s)"
        else: 
            print "you have no new email"

    emailcount(newmails) #call emailcount function and pass value newmails as agrument
    time.sleep(5)       #wait 5 seconds


