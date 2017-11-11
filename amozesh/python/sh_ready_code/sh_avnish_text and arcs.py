from tkinter import *
import random
root = Tk()
canvas = Canvas(root, width = 300 , height = 300)

canvas.pack()


canvas.create_arc(10,10,200,80,extend = 45 , style=ARC)
canvas.create_arc(10,80,200,80,extend = 90 , style=ARC)


root.mainloop()
