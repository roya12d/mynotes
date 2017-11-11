from tkinter import Tk
from tkinter import *


win = Tk()
var = StringVar()
group = LabelFrame(win,text ="welcome shahab")
group.pack(fill="both", expand="yes")
l = Label(group,text="hi")
l.pack()
win.mainloop()
