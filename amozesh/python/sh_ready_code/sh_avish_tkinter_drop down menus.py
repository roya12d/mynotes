from tkinter import *

import tkinter.messagebox


root = Tk()



def random():
	print("this is a statement")


mainMenu = Menu(root)
root.configure(menu = mainMenu)
subMenu = Menu(mainMenu)
mainMenu.add_cascade(label = "File" , menu = subMenu)
subMenu.add_command(label = "random func", command = random)
subMenu.add_command(label = "new file", command = random)
subMenu.add_separator()


subMenu.add_command(label = "another", command = random)





root.mainloop()
