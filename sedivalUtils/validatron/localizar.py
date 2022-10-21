# Definición de constantes

import sys

'''
Script que partiendo mediante fichero de equivalencias .csv y tomando como parámetros [dir3] y el número de expediente [expediente]
nos devuelve el directorio donde se encuentra el expediente
'''

FICHERO_EQUIVALENCIAS = "equivalencias.csv"

if __name__ == '__main__':

    if len(sys.argv) < 3:
        print("Uso localizar.py [dir3] [expediente] --> Localización del expediente")
        print(
            '''
Script que partiendo mediante fichero de equivalencias .csv y tomando como parámetros [dir3] y el número de expediente [expediente]
nos devuelve el directorio donde se encuentra el expediente
'''
        )
        exit()

    dir3 = sys.argv[1]
    exp =  sys.argv[2]

    from csv import reader

    with open(FICHERO_EQUIVALENCIAS, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_equivalencias = list(csv_reader)
        #print(list_equivalencias)

    encontrado = False
    for expediente in list_equivalencias:

        if expediente[1] != dir3:
            continue
        else:
            if exp == expediente[2]:
                print(expediente[0])
                encontrado = True

    if not encontrado:
        print("El expediente no existe")

