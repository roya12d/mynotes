from tkinter import *

root = Tk()

topFrame=Frame(root)
topFrame.pack()

botFrame = Frame(root)
botFrame.pack(side=BOTTOM)



Button1= Button(topFrame,text="Click me",fg="Blue")
Button1.pack(side=LEFT)


Button2= Button(topFrame,text="hello",fg="Red")
Button2.pack(side=LEFT)

Button3= Button(botFrame,text="hi",fg="Purple")
Button3.pack(side=LEFT)

Button4= Button(botFrame,text="salam",fg="Green")
Button4.pack(side=LEFT)



root.mainloop()
