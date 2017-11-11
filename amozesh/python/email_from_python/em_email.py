import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
print("1")
#server = smtplib.SMTP('smtp.mail.yahoo.com',465) #smtp,portnumber

server = smtplib.SMTP_SSL('smtp.mail.yahoo.com', 465)
server = smtplib.SMTP("smtp.mail.yahoo.com", 587)
#server = smtplib.SMTP('smtp.gmail.com', 587)
print("2")
server.ehlo()
server.starttls()
server.ehlo()
#server.login("shahab.emami95@gmail.com","GOT143780291120got")
server.login("shahabemame@yahoo.com","GOT143780291120got")


 
fromaddr = "shahabemame@yahoo.com"
toaddr = "emami.shahab@yahoo.com"
subject = "hi my friend "
 
msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = subject
print("3") 
body = "اين پيام را در بدنه ببين"
msg.attach(MIMEText(body, 'plain'))
 
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
print('ok')
