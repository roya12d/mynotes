import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
print("1")
#server = smtplib.SMTP('smtp.mail.yahoo.com',465) #smtp,portnumber
server = smtplib.SMTP('smtp.gmail.com', 587)
print("2")
server.ehlo()
server.starttls()
server.ehlo()
server.login("shahab.emami95@gmail.com","GOT143780291120got")


 
fromaddr = "shahab.emami95@gmail.com"
toaddr = "shahabemame@yahoo.com"
subject = "hi my friend this email is from shahab who say hello to you"
 
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = subject
print("3") 
body = "Sent from Python"
msg.attach(MIMEText(body, 'plain'))
 
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
print('ok')
