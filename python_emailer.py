#### Python emailer - http://naelshiab.com/tutorial-send-email-python/
#### Gmail made some security change change recently. You now have to allow “less secure apps” on your account https://www.google.com/settings/security/lesssecureapps.
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
 
 
fromaddr = "youremail@gmail.com"
toaddr = "youremail@gmail.com"
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "SUBJECT OF THE MAIL"
 
body = "YOUR MESSAGE HERE"
msg.attach(MIMEText(body, 'plain'))
 
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(fromaddr, "***password***")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
server.quit()