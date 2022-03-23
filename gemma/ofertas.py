
import random
import sys

def obtener_lista_empresas(lista_result_empresa):
	temp = ""
	lista_result_empresa.sort()
	for i in range(len(lista_result_empresa)):
		if i == len(lista_result_empresa)-1:
			temp = temp + str(lista_result_empresa[i])
		elif i == len(lista_result_empresa)-2:
			temp = temp + str(lista_result_empresa[i]) + " y "
		else:
			temp = temp + str(lista_result_empresa[i]) + " ,"
	return temp

ofertas = input("Introduce las ofertas separadas por comas: ")
lista_ofertas = ofertas.split(",")

# Transformamos a lista de números
lista_ofertas = [int(i) for i in lista_ofertas]

lista_result_empresa = []
lista_result_ofertas = []

# Recuperamos las primeras empresas y ofertas minimas
min1 = min(lista_ofertas)
for i in range(len(lista_ofertas)):
	if lista_ofertas[i] == min1:
		lista_result_empresa.append(i+1)
		lista_result_ofertas.append(lista_ofertas[i])
		lista_ofertas[i] = sys.maxsize

# Recuperamos las segundas empresas y ofertas minimas
min2 = min(lista_ofertas)
for i in range(len(lista_ofertas)):
	if lista_ofertas[i] == min2:
		lista_result_empresa.append(i+1)
		lista_result_ofertas.append(lista_ofertas[i])
		lista_ofertas[i] = sys.maxsize

ganadora = random.choice(lista_result_empresa)

print("The two smallest offers are " + str(min1) + " and " + str(min2)+ ". The companies offering thouse offers are " + obtener_lista_empresas(lista_result_empresa) + ". The winner is company " + str(ganadora))




