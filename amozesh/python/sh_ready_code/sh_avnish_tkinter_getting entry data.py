from tkinter import *

root = Tk()


def evaluate(event):
	data = e.get()
	ans.configure(text = "answer:" + str(eval(data)))


e = Entry(root)

e.bind("<Return>" , evaluate)

e.pack()
ans = Label(root)
ans.pack()

root.mainloop()
