from tkinter import *

root = Tk()





Button1= Button(None,text="Click me",fg="Blue")
Button1.pack(side=LEFT)


Button2= Button(None,text="hello",fg="Red")
Button2.pack(fill=X)

Button3= Button(None,text="hi",fg="Purple")
Button3.pack(side=RIGHT, fill=Y)

Button4= Button(None,text="salam",fg="Green")
Button4.pack()



root.mainloop()
