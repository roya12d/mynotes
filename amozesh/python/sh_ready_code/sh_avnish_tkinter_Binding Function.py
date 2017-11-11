from tkinter import *

root = Tk()

def printName(event):
	print (" hello shahab")


button1 = Button(root,text = "click me")
button1.bind("<Button-1>", printName)
button1.pack()
root.mainloop()
