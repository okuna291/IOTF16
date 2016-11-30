#!/usr/bin/python
#MAIN THREAD
import time
import urllib2
import urllib
from threading import Thread


# def get_responses():
#     urls = ['http://www.google.com', 'http://www.amazon.com', 'http://www.ebay.com', 'http://www.alibaba.com', 'http://www.reddit.com']
#     start = time.time()
#     for url in urls:
#         print url
#         resp = urllib2.Request(url)
#         # resp = urllib2.urlopen(resp)
#         # print resp.getcode()
        
#     print "Elapsed time: %s" % (time.time()-start)

# get_responses()




# MULTI THREADING


# class GetUrlThread(Thread):
#     def __init__(self, url):
#         self.url = url 
#         super(GetUrlThread, self).__init__()

#     def run(self):
#         resp = urllib2.urlopen(self.url)
#         print self.url, resp.getcode()

# def get_responses():
#     urls = ['http://www.google.com', 'http://www.amazon.com', 'http://www.ebay.com', 'http://www.alibaba.com', 'http://www.reddit.com']
#     start = time.time()
#     threads = []
#     for url in urls:
#         t = GetUrlThread(url)
#         threads.append(t)
#         t.start()
#     for t in threads:
#         t.join()
#     print "Elapsed time: %s" % (time.time()-start)

# get_responses()



####
#define a global variable
# some_var = 0

# class IncrementThread(Thread):
#     def run(self):
#         #we want to read a global variable
#         #and then increment it
#         global some_var
#         read_value = some_var
#         print "some_var in %s is %d" % (self.name, read_value)
#         some_var = read_value + 1 
#         print "some_var in %s after increment is %d" % (self.name, some_var)

# def use_increment_thread():
#     threads = []
#     for i in range(50):
#         t = IncrementThread()
#         threads.append(t)
#         t.start()
#     for t in threads:
#         t.join()
#     print "After 50 modifications, some_var should have become 50"
#     print "After 50 modifications, some_var is %d" % (some_var,)

# use_increment_thread()