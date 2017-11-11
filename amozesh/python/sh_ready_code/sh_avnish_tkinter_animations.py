from tkinter import *

root = Tk()
canvas = Canvas(root, width = 300 , height = 300)

canvas.pack()

canvas.create_polygan(10,10,10,60,50,35)

for i in range(0,60):
	canvas.move(1,5,0)
	root.update()
	time.sleep()




root.mainloop()
