import random

k = 50
paquetes = [12,5,14,6,21,17,10,7,17,9,4,13,10,5]
motos = []


def seleccionarPaquete(p):

    maximo = max(p)
    indice = p.index(maximo)

    return indice, maximo       

def solucionesFactibles(motos, p):

    s = []
    for m in motos:
        if sum(m) + p <= k:
            s.append(motos.index(m))
            #Modifica
            break

    return s

'''
entrada = input("Introduce la lista de pesos de paqutes separados por comas: ")
paquetes = [int(x) for x in entrada.split(",")]
'''


while len(paquetes) > 0:

    # Seleccionamos el elemento candidato
    i, p = seleccionarPaquete(paquetes)

    if p > k:
        print("Existe un paquete que excede la capacidad de las motos")
        exit()

    # Buscamos la primera moto en la que cabe
    asignado = False
    for m in motos:
        if sum(m) + p <= k:
            m.append(p)
            asignado = True
            break

    # Si no hemos podido asignar necesitamos otra moto
    if not asignado:
        motos.append([p])

    paquetes.pop(i)






print("\n")
print("**** RESULTADO ****\n")
for i, m in enumerate(motos):
    print("Moto número {0} ({1}) - Paquetes: {2}".format(i, sum(m), m))
print("\n")
print("********************")