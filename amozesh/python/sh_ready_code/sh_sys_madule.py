import sys
from sys import path
from sys import argv
x = sys.version
print(x)

y= sys.api_version
print(y)

print (sys.path)
print("\n")
print(__file__)
print("your file is in this path" + argv[0])
sys.exit()
