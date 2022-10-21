
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
  
    contador = 0

    # Por cada uno de los expedientes
    for expediente in [d for d in os.listdir(repositorio) if os.path.isdir(os.path.join(repositorio, d))]:

        # detección si el expediente estaba sellado
        elementos = os.listdir(os.path.join(repositorio, expediente))
        if "Sellados" in elementos:
            print(nombre)
            break
