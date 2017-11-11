from tkinter import *

root = Tk()

def leftClick(event):
	print ("left")

def rightclick(event):
	print ("right")

def scroll(event):
	print ("scroll")


def leftkey(event):
	print ("left key preeesed")

def rightkey(event):
	print ("right key preeesed")

root.geometry("500x500")

root.bind("<Button-1>" , leftClick)
root.bind("<Button-2>" , rightclick)
root.bind("<Button-3>" , scroll)
root.bind("<Left>" , leftkey)
root.bind("<Right>" , rightkey)

root.mainloop()
