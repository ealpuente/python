
# Divide un fichero texto largo en varios ficheros de splitLen lineas

splitLen    = 500               # lineas por fichero
outputBase  = 'fichero_parte'   # Formato nombre ficheros de salida

# Abrimos el fichero de entrada, lo leeamos y transformamos en un array de lineas
input = open('input.csv', 'r', encoding="utf8", errors='ignore').read().split('\n')

at = 1
for lines in range(0, len(input), splitLen):
    
    # Recuperamos el primer bloque de líneas
    outputData = input[lines:lines+splitLen]

    # Escribimos a fichero
    output = open(outputBase + str(at) + '.csv', 'w', encoding="utf8")
    output.write('\n'.join(outputData))
    output.close()

    # Incrementamos el contador
    at += 1
