import os

dir = 'C:\\Users\\33405257B\\Downloads'

lista = os.listdir(dir)
for e in lista:
    if e.endswith(".pdf"):
        print(e)


