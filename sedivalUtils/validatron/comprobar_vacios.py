# Definición de constantes
from itertools import count
import os
import sys
from csv import reader

BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_EQUIVALENCIAS = "equivalencias.csv"
FICHERO_DIR3 = "dir3.csv"


# Dado un directorio, cuenta el número de subdirectorios
def contar_expedientes_fisicos(repositorio, list_equivalencias):

    contador = 0
    contador_vacios = 0

    for equivalencia in list_equivalencias:
        directorio = os.path.join(repositorio,equivalencia[0])
        if os.path.isdir(directorio) and equivalencia[0][0:3] == "ES_":
            
            contador += 1

            if len(os.listdir(directorio)) == 0:
                contador_vacios += 1
            
    return(contador, contador_vacios)


if __name__ == '__main__':

    # Leemos el fichero de los DIR3 a analizar
    with open(FICHERO_DIR3, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_dir3 = list(csv_reader)
        #print(list_dir3)
    #print("Dir3: " + str(len(list_dir3)))

    # Leemos el fichero de equivalencias entre identficiadores
    with open(FICHERO_EQUIVALENCIAS, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_equivalencias = list(csv_reader)
        #print(list_equivalencias)
    #print("Equivalencias: " + str(len(list_equivalencias)))

    fout = open("comprobar_vacios.out", "w")

    # Para cada una de las entidades DIR3
    for entidad in list_dir3:

        # Recuperamos su código, nombre y formamos el repositorio
        dir3 = entidad[0]
        nombre = entidad[1]
        repositorio = BASE_DIR_REPOSITORIO + nombre + "\\EXPEDIENTES\\"

        # Escribimos la cabecera
        fout.write("\n\n\n" + "********* " + nombre.upper() + " *********" + "\n")
        print("Analizando " + nombre + "... \n")

        # Filtramos lista por dir3
        list_equivalencias_dir3 = list(filter(lambda x: x[1] == dir3, list_equivalencias))

        cexpedientes_fisicos = 0
        cexpedientes_vacios = 0
        # Inicializamos contadores
        cexpedientes_fisicos, cexpedientes_vacios = contar_expedientes_fisicos(repositorio, list_equivalencias_dir3)

        # Escribimos el resumen para la entidad
        fout.write("-------------------------" + "\n")
        fout.write("Expedientes totales: " + str(cexpedientes_fisicos) + "\n")
        fout.write("Expedientes vacios : " + str(cexpedientes_vacios) + "\n")

    fout.close()
