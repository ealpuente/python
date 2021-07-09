
# Abrimo fichero de lectura
f = open("./entidades.txt", "r")

# Abrimos el fichero de escritura
o = open("./entidades_limp.txt", "w", encoding='cp1252')

# Por cada una de las líneas de entrada
for linea in f:
    pos = linea.find(" ")
    pos2 = linea.find("-")
    pos3 = linea.find('(')

    if (pos > 0 and pos2 > 0 and pos3 > 0):
        codigo = linea[:pos]
        nombre = linea[pos+1:pos2]
        ano = linea[pos2+1:pos3]

        #print("{0} - {1} - {2}".format(codigo,nombre,ano))
        o.writelines("{0}\t{1}\t{2}\n".format(codigo,nombre,ano))


# Escribimos cabecera de fichero
#o.write('{\n')

# Cerramos ficheros
f.close
o.close