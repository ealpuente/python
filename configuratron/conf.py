import json

# Variables globales
decoded = any

# Carga el fichero json que contiene los parámetros
def load_config(fichero):

    global decoded

    ## Leemos el fichero de configuración y parseamos el json
    file = open(fichero)
    json_string = file.read()
    decoded = json.loads(json_string)

# Devuelve el valor del parámetro pasado por parámetro
def get_parameter(id):
    return decoded[id]

# Código para realizar pruebas y mostrar el uso del módulo
if (__name__ == "__main__"):

    # Cargamos el fichero de parametros de prueba
    load_config("test.json")

    # Obtenemos los parametros
    p1 = get_parameter('PARAMETRO1')
    p2 = get_parameter('PARAMETRO2')
    ap = get_parameter('ARRAY_PARAMETROS')
    
    # Imprimimos los valores de los parametros recuperados
    print(type(p1))
    print(p2)
    print(ap)
    print(ap[1])
    print(ap[1]['nombre'])