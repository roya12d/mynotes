from tkinter import *

root = Tk()

label1 = Label(root,text = "Name :")
label1.grid(row = 0, column = 0)

entrySapce = Entry(root)
entrySapce.grid(row=0, column = 1)

cbutton = Checkbutton(root , text = "remember me")

cbutton.grid(columnspan = 2)

root.mainloop()
