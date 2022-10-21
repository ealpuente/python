'''

Partiendo de la lista de equivalencias y el fichero DIR3, para cada entidad comprueba:
 
 - Ficheros físicos indicando los que faltan en el excel
 - Expedientes en el excel, desglosando en buenos, borrador y números y de cada uno de ellos indica los que faltan f´sicamente
 - También comprueba de los expedientes buenos que existen, cuales tienen directorios vacíos

'''

# Definición de constantes
from itertools import count
import os
import sys
from csv import reader

BASE_DIR_REPOSITORIO = "Y:\\"
FICHERO_EQUIVALENCIAS = "equivalencias_vinalesa_borrador.csv"
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

    # Preparamos el fichero de salida del análisis
    fsalida_detalle = "comprobar_export_detalle.txt"
    fsalida_resumen = "comprobar_export_resumen.txt"
    fsalida_resumen2 = "comprobar_export_resumen.csv"

    fout_detalle = open(fsalida_detalle, "w")
    fout_resumen = open(fsalida_resumen, "w")
    fout_resumen2 = open(fsalida_resumen2, "w")

    total_excel = 0
    total_faltan = 0

    # Para cada una de las entidades DIR3
    for entidad in list_dir3:

        # Recuperamos su código, nombre y formamos el repositorio
        dir3 = entidad[0]
        nombre = entidad[1]
        repositorio = BASE_DIR_REPOSITORIO + nombre + "\\EXPEDIENTES\\"

        # Escribimos la cabecera
        fout_resumen.write("\n\n\n" + "********* " + nombre.upper() + " *********" + "\n")
        fout_detalle.write("\n\n\n" + "********* " + nombre.upper() + " *********" + "\n")
        print("Analizando " + nombre + "... \n")

        # Filtramos lista por dir3
        list_equivalencias_dir3 = list(filter(lambda x: x[1] == dir3, list_equivalencias))

        # Inicializamos contadores
        cexpedientes_fisicos, cexpedientes_fisicos_ne = contar_expedientes_fisicos(repositorio, list_equivalencias_dir3)
        cexpedientes_excel = 0
        cexpedientes_excel_buenos = 0
        cexpedientes_excel_numeros = 0
        cexpedientes_excel_borrador = 0
        cexpedientes_excel_buenos_ne = 0
        cexpedientes_excel_numeros_ne = 0
        cexpedientes_excel_borrador_ne = 0
        cexpedientes_excel_buenos_vacios = 0



        for expediente in list_equivalencias_dir3:

            # Determinamos el tipo de expediente y sumamos su contador
            cexpedientes_excel += 1
            tipo = -1
            if expediente[2].count('BORRADOR:') > 0:
                tipo = 0
                cexpedientes_excel_borrador += 1
            elif expediente[2].count('/') > 0:
                tipo = 1
                cexpedientes_excel_buenos += 1
                total_excel += 1
            elif expediente[2].isnumeric:
                tipo = 2
                cexpedientes_excel_numeros += 1
            else:
                print("ERROR FATAL: Tipo de expediente no esperado" + expediente[2] + " " + dir3)
                exit

            # Comprobamos si el expediente existe fisicamente
            if not os.path.exists(repositorio + expediente[0]):

                if tipo == 0:
                    cexpedientes_excel_borrador_ne += 1
                elif tipo == 1:
                    cexpedientes_excel_buenos_ne += 1
                    total_faltan += 1
                else:
                    cexpedientes_excel_numeros_ne += 1

                fout_detalle.write(expediente[2] + ";" + expediente[0] + "\n")

            elif tipo == 1:
                # Si existe el directorio y es de tipo bueno, comprobamos si está vacío
                if len(os.listdir(repositorio + expediente[0])) == 0:
                    fout_detalle.write("Directorio Vacio " + expediente[2] + "(" + expediente[0] + ")" + "\n")
                    cexpedientes_excel_buenos_vacios += 1


        # Escribimos el resumen para la entidad
        fout_resumen.write("-------------------------" + "\n")
        #fout_resumen.write("Expedientes fisicos: " + str(cexpedientes_fisicos) + "--> Faltan en Excel " + str(cexpedientes_fisicos_ne) + "\n")
        fout_resumen.write("Expedientes excel  : " + str(cexpedientes_excel) + "\n")
        fout_resumen.write("Faltan fisicamente : " + str(cexpedientes_excel_buenos_ne) + "\n")
        #fout_resumen.write("   - Buenos        : " + str(cexpedientes_excel_buenos) + "\n")
        
        #fout_resumen.write("       --> Directorio vacio   " + str(cexpedientes_excel_buenos_vacios) + "\n")
        fout_resumen.write("   - Borrador      : " + str(cexpedientes_excel_borrador) + "--> Faltan fisicamente " + str(cexpedientes_excel_borrador_ne) + "\n")
        fout_resumen.write("   - Numeros       : " + str(cexpedientes_excel_numeros) + "--> Faltan fisicamente " + str(cexpedientes_excel_numeros_ne) + "\n")

        # Escribimos resumen para excel
        fout_resumen2.write(nombre.upper() + ";" + str(cexpedientes_excel_buenos) + ";" + str(cexpedientes_excel_buenos_ne) +  "\n")


    fout_resumen.write("-------------------------" + "\n")
    fout_resumen.write("-------- TOTALES --------" + "\n")
    fout_resumen.write("-------------------------" + "\n")
    fout_resumen.write("Total Expedientes excel  : " + str(total_excel) + "\n")
    fout_resumen.write("Total Faltan fisicamente : " + str(total_faltan) + "\n")

    fout_resumen.close()
    fout_resumen2.close()
    fout_detalle.close()
