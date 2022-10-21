
'''

Partiendo de la lista de equivalencias y el fichero DIR3, para cada entidad comprueba que los 
ficheros físicos señalados en el excel existen en el repositorio

'''

# Definición de constantes
from genericpath import isdir
import os

BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_EQUIVALENCIAS = "equivalencias_full.csv"
FICHERO_DIR3 = "dir3.csv"


if __name__ == '__main__':


    from csv import reader
    import csv

    with open(FICHERO_DIR3, 'r') as csv_file:
        csv_reader = reader(csv_file, delimiter=";")
        list_dir3 = list(csv_reader)
        #print(list_dir3)

    # Formamos la lista de expedientes ENI del fichero de equivalencias
    filename = open(FICHERO_EQUIVALENCIAS, "r")
    file = csv.DictReader(filename,delimiter=";")
    lista_equivalencias = []
    for col in file:
        lista_equivalencias.append(col['EXPEDIENTE_ENI'])
    filename.close()

    fout = open("out.txt", "w")

    for entidad in list_dir3:

        dir3 = entidad[0]
        nombre = entidad[1]
        count_nexisten = 0
        count_totales = 0

        repositorio = BASE_DIR_REPOSITORIO + nombre + "\\EXPEDIENTES\\"

        fout.write("\n\n\n" + "********* " + nombre + " *********" + "\n")
        print("Analizando " + nombre + "\n")


        # Por cada uno de los directorios del repositorio de la entidad
        for directorio in os.listdir(repositorio):

            # Comprobamos que es directorio
            if os.path.isdir(os.path.join(repositorio,directorio)):
                encontrado = False
                count_totales += 1
                
                # Si no lo encontramos sacamos el error
                if not directorio in lista_equivalencias:
                    fout.write("No existe " + directorio + " en tabla equivalencia\n")
                    count_nexisten += 1
            else:
                continue

              
        # Escribimos resultado final
        fout.write("-------------------------" + "\n")
        fout.write("No Existen   : " + str(count_nexisten) + "\n")
        fout.write("Existen: " + str(count_totales - count_nexisten) + "\n")
        fout.write("TOTALES   : " + str(count_totales) + "\n")

    fout.close()
