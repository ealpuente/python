
lista = [12,11,4,6,8,-9,0]
print(lista)

#acceso a un elemento concreto
print(lista[5])

#eliminar elemento de una lista por indice
del lista[5]
print(lista)

#añadir elemento (no tienen por que ser del mismo tipo)
lista.append('Hola que tal')
print(lista)

#elimina un elemento especificándolo
lista.remove(11)
print(lista)

#obtener un indice de un elemento
print(lista.index(8))