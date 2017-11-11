from tkinter import Tk
from tkinter import *


win = Tk()
b = Button(win,text="btn")

var = StringVar()
l = Label(win,textvariable = var, relief=RAISED)
var.set("this is a lable")

l.pack ()
b.pack()
#----------------------

label = Message(win,textvariable = var)
var.set("are you ok?")
label.pack()
win.mainloop()
