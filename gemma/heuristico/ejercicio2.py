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

    return s

'''
entrada = input("Introduce la lista de pesos de paqutes separados por comas: ")
paquetes = [int(x) for x in entrada.split(",")]
'''


while len(paquetes) > 0:

    # Seleccionamos el elemento candidato
    i, p = seleccionarPaquete(paquetes)

    # Buscar soluciones factibles
    s = solucionesFactibles(motos, p)

    # Si hay soluciones factibles seleccionamos una
    if len(s) > 0:
        ms = random.choice(s)

        # Añadimos a la solución
        motos[ms].append(p)
     
        # Eliminamos elemento de la lista
        paquetes.pop(i)
    else:
        # añadimos una nueva moto
         motos.append([])



print("\n")
print("**** RESULTADO ****\n")
for i, m in enumerate(motos):
    print("Moto número {0} ({1}) - Paquetes: {2}".format(i, sum(m), m))
print("\n")
print("********************")