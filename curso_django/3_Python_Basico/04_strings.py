7

# Cadenas anidadas

cadena = "El dijo:'Hola que tal'"
cadena = 'El dijo:"Hola que tal"'
cadena = "El dijo:\"Hola que tal\""
cadena_larga = '''
Esto es una cadena
de varias lineas
Y acaba aqui
'''

cadena_larga = cadena_larga.replace('Esto', 'Aquello')

print(cadena_larga)

print(cadena_larga.count('a'))