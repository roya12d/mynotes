from tkinter import *

root= Tk()
canvas = Canvas(root , width =300, height = 300)
canvas.pack()
canvas.create_rectangle(20, 20 , 100, 270)
canvas.create_line(0,0,300,300)
canvas.create_polygon(0,0,5,20,50,30,40,15)

def createRect(x1,y1,x2,y2):
    canvas.create_rectangle(x1,y1,x2,y2, fill="blue")

createRect(5,50,200,70)
createRect(5,100,34,56)

root.mainloop()
