import base64
import os
import sys
import xml.etree.ElementTree as et

if len(sys.argv) == 1:
    print(
        '''
Aplicación que extrae la información de los expedientes en sediVal en xml. 

Uso: extraer_expediente.py [directorio]

'''
    )
    exit()

if not os.path.exists(sys.argv[1]) or not os.path.isdir(sys.argv[1]):
    print("Directorio no existe")

ficheros = os.listdir(sys.argv[1])

for fname in ficheros:
    
    if fname.find(".xml") != -1:

        tree = et.parse(os.path.join(sys.argv[1], fname))
        root = tree.getroot()

        i = 1
        for elemento in root.iter('{http://administracionelectronica.gob.es/ENI/XSD/v1.0/documento-e/contenido}ValorBinario'):
            nombre_fichero = fname + str(i) + ".pdf"
            f = open(nombre_fichero, "wb")
            f.write(base64.b64decode(elemento.text))
            f.close()
            i += 1

    i += 1




