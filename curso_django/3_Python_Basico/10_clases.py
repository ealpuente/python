
# Definimos la clase puerta
class Puerta:
	abierta 	= True
	material 	= 'madera'
	ancho		= 10
	alto 		= 200
	largo		= 100

	def __init__(self, abierta, material):
		self.abierta = abierta
		self.material = material

	def volumen(self):
		return self.alto * self.ancho * self.largo


puerta = Puerta(True, 'madera')

print(str(puerta.volumen()) + " cm3")