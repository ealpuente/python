
from csv import reader
import shutil
import os, glob

'''
Aplicación que elimina el trabajo realizado por el stamper para una lista de entidades y deja los expedientes en su estado original
'''

BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_DIR3 = "dir3.csv"

def corregir(path_expediente):

    try:
        # Eliminar fichero indice
        os.remove(os.path.join(path_expediente, "Indice.pdf"))
    except:
        pass

    # Eliminar directorio Sellados
    shutil.rmtree(os.path.join(path_expediente, "Sellados"))

    # Eliminar directorio Originales
    shutil.rmtree(os.path.join(path_expediente, "Originales"))

    # Sacar xml a directorio principal
    path_xml = os.path.join(path_expediente, "XML")
    for fich in [f for f in os.listdir(path_xml) if f.endswith(".xml") ]:
        shutil.move(os.path.join(path_xml, fich), os.path.join(path_expediente, fich))

    # Borrar directorio xml
    shutil.rmtree(os.path.join(path_expediente, "XML"))




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

    # Comprobamos si hay fichero csv (indicador de entidad a destampar)
    if len([f for f in os.listdir(repositorio) if f.endswith(".csv")]) > 0: 

        print("Procesando ... " + nombre.upper())

        # Por cada uno de los expedientes
        for expediente in os.listdir(repositorio):

            # solo directorios de expedientes
            path_completo = os.path.join(repositorio, expediente)
            if os.path.isdir(path_completo):

                # detección si el expediente estaba sellado
                elementos = os.listdir(path_completo)
                if "Sellados" in elementos:

                    corregir(path_completo)
                    contador += 1
            
            else:

                # No es un directorio
                if expediente.endswith(".csv"):
                    os.remove(os.path.join(repositorio, expediente))

        if contador > 0:
            print(str(contador) + " expedientes" + "\n")

