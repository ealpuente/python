'''

Partiendo de la lista de equivalencias y el fichero DIR3, para cada entidad comprueba que el expediente existe fisicamente 
y lo lista por pantalla.
 
'''

# Definición de constantes
from itertools import count
import os
import sys
from csv import reader

BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_EQUIVALENCIAS = "equivalencias_vinalesa_numeros.csv"
FICHERO_DIR3 = "dir3_vinalesa.csv"


# Dado un directorio, cuenta el número de subdirectorios
def contar_expedientes_fisicos(repositorio, list_equivalencias):

    contador = 0
    contador_ne = 0

    for directorio in os.listdir(repositorio):
        # Comprobamos que es directorio
        if os.path.isdir(os.path.join(repositorio,directorio)) and directorio[0:3] == "ES_":
            contador += 1
            flg_existe = False
            for linea in list_equivalencias:
                if linea[0] == directorio:
                    flg_existe = True
                    break
            if not flg_existe:
                contador_ne += 1

    return(contador, contador_ne)


if __name__ == '__main__':

    # Leemos el fichero de los DIR3 a analizar
    with open(FICHERO_DIR3, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_dir3 = list(csv_reader)
        #print(list_dir3)

    # Leemos el fichero de equivalencias entre identficiadores
    with open(FICHERO_EQUIVALENCIAS, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_equivalencias = list(csv_reader)
        #print(list_equivalencias)

    # Para cada una de las entidades DIR3
    for entidad in list_dir3:

        # Recuperamos su código, nombre y formamos el repositorio
        dir3 = entidad[0]
        nombre = entidad[1]
        repositorio = BASE_DIR_REPOSITORIO + nombre + "\\EXPEDIENTES\\"

        # Escribimos la cabecera
        print("\n\n\n" + "********* " + nombre.upper() + " *********" + "\n")

        # Filtramos lista por dir3
        list_equivalencias_dir3 = list(filter(lambda x: x[1] == dir3, list_equivalencias))

        for expediente in list_equivalencias_dir3:

            # Comprobamos si el expediente existe fisicamente
            ruta = repositorio + expediente[0]
            if os.path.exists(ruta):

                ficheros = os.listdir(ruta)
                if len(ficheros) > 5:
                    print(ruta)

