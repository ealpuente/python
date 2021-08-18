import json

# Definimos las variables
num_columnas = 0
sufijo_salida = ""
configuracion_columnas = []

def load_config():

    global num_columnas
    global sufijo_salida
    global configuracion_columnas

    ## Leemos el fichero de configuración y parseamos el json
    file = open("conf.json")
    json_string = file.read()
    decoded = json.loads(json_string)

    num_columnas = decoded['numcolumnas']
    sufijo_salida = decoded['output']
    configuracion_columnas = decoded['configuracion']

    ##print(decoded['configuracion'][0])




