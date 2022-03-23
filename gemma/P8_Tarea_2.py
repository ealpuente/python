
#
# P8_Tarea_2.py
#
# Este programa calcula el factorial de un número pedido por teclado
#
# Versión 1.0
#
# Autores: Carmen Davó y Gemma Alpuente
#
#

from math import sin

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

def seno_aproximado(x, n):
	"""
	Función que calcula el seno aproximado de un ángulo x usando la serie de Tylor

	Args:
		x (float) 	[in]
		n (int)		[in]

	Returns:
		float: Seno aproximado de x

	"""
	seno = 0.0
	for i in range(0,n+1):

		# Calculamos el resultado de la iteración i
		multiplicador = (-1)**i
		f = factorial((2*i)+1)
		angulo = x**((2*i)+1)

		# Acumulamos al sumatorio
		seno = seno + ((multiplicador * angulo) / f)

	# Devolvemos resultado
	return seno

def main():

	# Pedimmos dos número por teclado y validamos
	try:
		x = float(input("Introduce un ángulo: "))
		n = int(input("Introduce el número de términos: "))
	except:
		# Los valores introducidos no son correctos
		print("No se ha introducido parámetros correctos")
	else:
		# Llamammos a la función factorial para calcular el resultado
		print("El seno aproximado de " + str(x) + " es " + str(seno_aproximado(x,n)))
		print("Con la función sin " + str(sin(x)))


if __name__ == '__main__':
	main()


