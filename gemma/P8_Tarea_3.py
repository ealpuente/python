

#
# P8_Tarea_3.py
#
# Este programa calcula la máxima media de un fichero y el alumno
#
# Versión 1.0
#
# Autores: Carmen Davó y Gemma Alpuente
#
#

import os

def ProcesaFichero(nombre_fichero):

	"""
	Función que toma el nombre de un fichero con alumnos y notas y devuelve el alumno con la mayor media y su media

	Args:
		nombre_fichero (str) [in]

	Returns:
		int: Factorial de num

	"""

	f = open(nombre_fichero, "r", encoding="UTF-8")

	# Inicializamos variables
	estudiante = ""
	suma = 0
	contador = 0
	media = 0
	linea = ""
	max_media = 0
	max_estudiante = ""

	# Leemos primera la línea
	linea = f.readline()

	while (linea != ""):

		# Guardamos el nombre del alumno
		estudiante = linea
		linea = f.readline()

		# Calculamos su media
		suma = 0
		contador = 0

		while linea != "" and linea[0].isdigit():
			suma = suma + float(linea)
			contador += 1
			linea = f.readline()

		media = round(suma / contador,2)

		# Media superior?
		if max_media < media:
			max_media = media
			max_estudiante = estudiante

	f.close()

	return max_estudiante, max_media


def main():

	# Pedimos el nombre del fichero
	nombre_fichero = str(input("Dime el fichero de notas: "))

	if os.path.exists(nombre_fichero):

		# Calculamos la máxima nota media
		alumno, nota = ProcesaFichero(nombre_fichero)

		# Visualizamos el resultado
		print("***************************")
		print("Alumno: " + alumno, end="")
		print("Nota media: " + str(nota))
		print("***************************")

	else:

		print("Error: El fichero no existe")

if __name__ == "__main__":
	main()




