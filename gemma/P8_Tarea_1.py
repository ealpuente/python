
#
# P8_Tarea_1.py
#
# Este programa calcula el factorial de un número pedido por teclado
#
# Versión 1.0
#
# Autores: Carmen Davó y Gemma Alpuente
#
#

def factorial(num):

	"""
	Función que toma un número y devuelve su factorial

	Args:
		num (int) [in]

	Returns:
		int: Factorial de num

	"""

	resultado = 1
	for i in range(1,num+1):
		resultado = resultado * i
	return resultado

def main():

	# Pedimmos el número y comprobamos su  validez
	try:
		num = int(input("Introduce un número entero para calcular el factorial: "))
	except:
		# Lo introducido no es correcto
		print("No se ha introducido un número entero")
	else:
		# Llamammos a la función factorial para calcular el resultado
		print("El factorial de " + str(num) + " es " + str(factorial(num)))

if __name__ == '__main__':
	main()


