from tkinter import *

import tkinter.messagebox

root = Tk()



tkinter.messagebox.showinfo("window title","did you now that the world just blew up?")
answer = tkinter.messagebox.askquestion("question1","are you human?")

if answer=="yes":
    tkinter.messagebox.showinfo("congrats","thanks god")

if answer=="no":
    tkinter.messagebox.showinfo("alien","ensanam arezoost")
    
root.mainloop()
