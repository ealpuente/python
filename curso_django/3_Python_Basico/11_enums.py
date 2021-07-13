from enum import Enum

class Color(Enum):
	RED = 1
	YELLOW = 2
	BLACK = 3
	WHITE = 4


print(Color.RED)
print(Color.RED.value)

e = Color.RED

print(e)