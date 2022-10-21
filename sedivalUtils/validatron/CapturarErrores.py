
from csv import reader
import shutil
import os, glob


BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_DIR3 = "dir3.csv"

# Leemos el fichero de los DIR3 a analizar
with open(FICHERO_DIR3, 'r') as csv_file:
    csv_reader = reader(csv_file, delimiter=";")
    list_dir3 = list(csv_reader)


# Para cada una de las entidades DIR3
for entidad in list_dir3:

    # Recuperamos su código, nombre y formamos el repositorio
    dir3 = entidad[0]
    nombre = entidad[1]
    repositorio = BASE_DIR_REPOSITORIO + nombre + "\\EXPEDIENTES\\"
  
    fichero_resultado = [f for f in os.listdir(repositorio) if f.endswith(".csv")]

    # Comprobamos si hay fichero csv (indicador de entidad a destampar)
    if len(fichero_resultado) == 1: 

        print("Revisando Errores para : " + nombre)
        print("-"*len("Revisando Errores para : " + nombre))

        f = open(os.path.join(repositorio,fichero_resultado[0]), "r")
        for l in f:
            linea = l.split(";")
            if linea[3] == "ERROR":
                print(linea[0] + " - " + linea[4])


    else:
        print("Error en entidad " + nombre)


