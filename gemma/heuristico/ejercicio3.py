# coding=utf-8

import random

##########################
# Definiciones de Clases #
##########################

# Clase paquete
class Paquete:

	def __init__(self, numero, peso):
		self.numero = numero
		self.peso = peso

	def visualizar(self):
		print("(id:" + str(self.numero) + ", peso:" + str(self.peso) + ")")

# Clase lista de paquetes
class ListaPaquetes:

	def __init__(self):
		self.lista = []

	# Anade un nuevo paquete a la lista ?
	def nuevoPaquete(self, p):
		self.lista.append(p)

	# Ordena la lista de mayor a menor peso ?
	def ordenarPaquetes(self):
		intercambio = True
		while intercambio:
			intercambio = False
			for i in range(len(self.lista) - 1):
				# Comparamos el peso el paquete con el siguiente
				if self.lista[i].peso < self.lista[i+1].peso:
					# Intercambiamos los paquetes
					self.lista[i], self.lista[i + 1] = self.lista[i + 1], self.lista[i]
					# Marcamos el flag para iterar de nuevo
					intercambio = True

	# Devuelve y quita el primer paquete de la lista
	def obtenerPaquete(self):
		p = self.lista.pop(0)
		return p

	# Devuelve el numero de elementos en la lista de paquetes
	def contarPaquetes(self):
		return len(self.lista)

	# Imprime la lista de paquetes por pantalla
	def visualizar(self):
		for p in self.lista:
			p.visualizar()

# Clase Moto
class Moto:

	def __init__(self, id):
		self.id = id
		self.peso_total = 0
		self.paquetes = ListaPaquetes()

	# Asigna un nuevo paquete a la moto
	def nuevoPaquete(self, p):
		self.paquetes.nuevoPaquete(p)
		self.peso_total += p.peso

	# Interroga si el paquete p cabe en la moto
	def cabePaquete(self, p, k):
		if self.peso_total + p.peso <= k:
			return True
		else:
			return False

	# Visualiza la moto y sus paquetes
	def visualizar(self):
		s = "Moto: " + str(self.id) + " Peso total: " + str(self.peso_total)
		print("\n")
		print(s)
		print("-"*len(s))
		self.paquetes.visualizar()

# Clase lista de Motos
class ListaMotos:

	def __init__(self):
		self.motos = []

	# Crea una nueva moto en la lista con el paquete pasado por parametro
	def nueva(self, p):
		moto = Moto(len(self.motos)+1)
		moto.nuevoPaquete(p)
		self.motos.append(moto)
		return moto

	# Devuelve una lista de motos que pueden llevar el paquete
	def motosPosibles(self, p, k):

		temp = []
		for m in self.motos:
			if m.cabePaquete(p, k):
				temp.append(m)

		return temp

	# Imprime la lista completa de motos y sus paquetes
	def visualiza(self):
		print("\n")
		print("Número de motos: " + str(len(self.motos)))
		for m in self.motos:
			m.visualizar()

# Dada una lista de motos selecciona y devuelve mediante rulette-wheel aquella a la que asignar el paquete
def elegir_moto_rw(s):
		
		L_prob = []
		L_acumulada = []
		prob = 0
		prob_acumulada = 0
		suma_peso = 0
		
		if len(s) > 0:
			for moto in s:
				suma_peso += moto.peso_total
				
			for moto in s:
				
				# probabilidad de cada moto
				prob = moto.peso_total/suma_peso
				
				# lista de probabilidades
				L_prob = L_prob + [prob]
				
				# probabilidad acumulada de cada moto
				prob_acumulada = prob_acumulada + prob
				
				# lista de prob acumuladas
				L_acumulada = L_acumulada + [prob_acumulada]
				
			valor_aleatorio = random.uniform(0,1)
			
			# num iteraciones y bandera
			i = 0
			escogida = False

			# escogemos moto 
			while not escogida:
				if valor_aleatorio <= L_acumulada[i]:
					ms = s[i]
					escogida = True
				
				i += 1
				
		# moto escogida de entre las factibles      
		return ms 

def main():

	#############################
	# Definiciones de Variables #
	#############################

	# Lista de paquetes
	lp = ListaPaquetes()
	
	# Lista de motos
	lm = ListaMotos()
	
	# Peso máximo moto
	k =0

	# Maximo peso de una moto
	k = int(input("Introduce el peso máximo para cada moto: "))
	if k <= 0:
		print("El peso máximo deber ser mayor que 0")
		exit()
	
	# Variables auxiliares
	s = []
	
	##################
	# Inicializacion #
	##################
	
	#pesos_paquetes = [12,5,14,6,21,17,10,7,17,9,4,13,10,5]
	
	# Leemos los pesos por teclado (input funciona diferente según la versión de python)
	input_func = raw_input if "raw_input" in __builtins__.__dict__ else input
	entrada = input_func("Introduce la lista de pesos de paqutes separados por comas: ")
	pesos_paquetes = [int(x) for x in entrada.split(",")]
	
	# Validamos que los pesos introducidos son correctos
	for x in pesos_paquetes:
		if x < 1 or x > k:
			print("Al menos uno de los pesos es incorrecto")
			exit()
	
	
	# Creamos la lista de paquetes
	for i in range(len(pesos_paquetes)):
		p = Paquete(i,pesos_paquetes[i])
		lp.nuevoPaquete(p)
	
	# Ordenamos la lista en orden decreciente
	lp.ordenarPaquetes()
	
	# Mientras existan paquetes en la lista
	while lp.contarPaquetes() > 0:
		
		# Obtenemos el primer paquete de la lista (maximo peso)
		p = lp.obtenerPaquete()
	
		# Buscar soluciones factibles
		s = lm.motosPosibles(p, k)
	
		if len(s) > 0:
			# Si existen motos posibles seleccionamos una de ellas
			moto_seleccionada = elegir_moto_rw(s)
			moto_seleccionada.nuevoPaquete(p)
		else:
			# Caso contrario creamos una moto nueva
			lm.nueva(p)
	
	################
	# Finalizacion #
	################
	
	lm.visualiza()
	
if __name__ == "__main__":
	main()