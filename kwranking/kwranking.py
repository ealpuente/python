
import os
import time

fichero = '.\keywords.txt'

def carga_keywords():
    try:
        f = open(fichero, 'rt')
        lista = []
        for linea in f:
            lista.append(linea.rstrip('\n'))
        return lista
    except FileNotFoundError:
        print('No se encuentra el fichero')

def muestra_keywords(keywords):
    contador = 0
    for kw in keywords:
        print(kw)
        contador += 1
        if contador == 20:
            contador = 0
            input('Mostrar más...')
    input('Mostrar más...')
    
def mostrarMenu():

    l = []

    while True:
        os.system ("cls") 

        # Msotramos el menú
        print("[1] - Importar palabras clave")
        print("[2] - Mostrar palabras clave")
        print("[0] - Salir")

        entrada = input('Elige opción: ')    
        try:
            entrada = int(entrada)
            if (entrada in range(0,3)):
                
                if (entrada == 1):
                    l = carga_keywords()
                    continue
                elif (entrada == 2):
                    muestra_keywords(l)
                    continue
                else:
                    break
            else:
                continue
        except ValueError:
            continue


mostrarMenu()