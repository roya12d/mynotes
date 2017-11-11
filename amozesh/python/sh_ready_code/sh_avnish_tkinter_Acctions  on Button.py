from tkinter import *

root = Tk()

def printName():
	print (" hello shahab")


button1 = Button(root,text = "click me" , command = printName)
button1.pack()
root.mainloop()
