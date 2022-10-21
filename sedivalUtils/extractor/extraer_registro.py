
'''
Aplicación que extrae la información de los apuntes registrales en sediVal en xml. Soportará las siguientes operaciones:

-i [ruta fichero xml] [destino]: Extrae la información de un fichero individual de registro
-d [directorio] [destino]: Extrae la información de todos los archivos xml de registro presentes en el directorio
-b [fichero batch] [destino]: Toma como entrada un fichero con una lista de directorios a extraer y los procesa en batch

Como salida generará:
 - Directorio con el mismo nombre que el fichero xml
 - Dentro del directorio:
    - Un archivo txt con la información resumen del apunte
    - Un pdf por cada uno de los archivos del apunte
    - Un fichero de firma por cada una de las firmas de cada documento

'''

import sys, os, glob, shutil
from registro import Apunte

# Comprobar argumentos
def comprobar_argumentos(argumentos):
    if len(argumentos) != 4:
        return False
    if sys.argv[1] not in ["-i", "-d", "-b"]:
        return False
    return True

# Procedimientos de extracción
def extraer_individual(fichero, dir):

    # Creamos el objeto fichero de apunte
 
    apunte = Apunte(fichero)

    apunte.extraer(dir)


def extraer_directorio(directorio, dir):

    for f in glob.glob(os.path.join(directorio,"*.xml")):

        extraer_individual(f, dir)



def extraer_batch(fichero, dir):

    if os.path.exists(dir):
        shutil.rmtree(dir)
    os.mkdir(dir)

    directorios = open(fichero, "r")
    for d in directorios:
        
        nombre = os.path.split(d.strip())[1]
        destino = os.path.join(dir, nombre) 
        os.mkdir(destino)
        extraer_directorio(d.strip(), destino)

    directorios.close()



# Comprobamos argumentos
if not comprobar_argumentos(sys.argv):
    print(
        '''
Aplicación que extrae la información de los apuntes registrales en sediVal en xml. Soportará las siguientes operaciones:

-i [ruta fichero xml] [destino]: Extrae la información de un fichero individual de registro
-d [directorio] [destino]: Extrae la información de todos los archivos xml de registro presentes en el directorio
-b [fichero batch] [destino]: Toma como entrada un fichero con una lista de directorios a extraer y los procesa en batch

Como salida generará:
 - Directorio con el mismo nombre que el fichero xml
 - Dentro del directorio:
    - Un archivo txt con la información resumen del apunte
    - Un pdf por cada uno de los archivos del apunte
    - Un fichero de firma por cada una de las firmas de cada documento

'''
    )
    exit()

# Diferenciamos la operación solicitada y llamamos al procedimiento adecuado
opcion = sys.argv[1]
if opcion == "-i":
    extraer_individual(sys.argv[2], sys.argv[3])
elif opcion == "-d":
    extraer_directorio(sys.argv[2], sys.argv[3])
elif opcion == "-b":
    extraer_batch(sys.argv[2], sys.argv[3])
