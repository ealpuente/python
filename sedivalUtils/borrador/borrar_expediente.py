from cgitb import text
from email import header
from time import time
from tokenize import String
import requests
from requests.structures import CaseInsensitiveDict
import calculateToken
import xml.etree.ElementTree as ET
import sys, os, time

# Función que permite parsear el xml base con los datos propios de la llamada
def parse_xml(xml: str, usuario: str, password: str, entidad: str, expediente:str, nif: str) -> str:

	token = calculateToken.calculateToken(password)

	xml = xml.replace("{usuario}", usuario)
	xml = xml.replace("{token}", token)
	xml = xml.replace("{entidad}", entidad)
	xml = xml.replace("{expediente}", expediente)
	xml = xml.replace("{nif}", nif)

	return xml

# SOAP request URL 
url = "https://46226.sedipualba.es/segex/wssegex.asmx"

# Datos xml para la llamada de borrado 
xml_borrar = '''<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
	<EliminarExpediente xmlns="https://eadmin.dipualba.es/segex/wssegex.asmx">
	  <wsseg_user>{usuario}</wsseg_user>
	  <wsseg_pass>{token}</wsseg_pass>
	  <pk_entidad>{entidad}</pk_entidad>
	  <codigoExpediente>{expediente}</codigoExpediente>
	  <nifusuario>{nif}</nifusuario>
	</EliminarExpediente>
  </soap12:Body>
</soap12:Envelope>'''

action_borrar = "https://eadmin.dipualba.es/segex/wssegex.asmx/EliminarExpediente"


# xml para el cambio de estado
xml_cambiar_estado = '''<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <CambiarEstadoExpediente xmlns="https://eadmin.dipualba.es/segex/wssegex.asmx">
	  <wsseg_user>{usuario}</wsseg_user>
	  <wsseg_pass>{token}</wsseg_pass>
	  <pk_entidad>{entidad}</pk_entidad>
	  <codigoExpediente>{expediente}</codigoExpediente>
	  <pk_estado>0</pk_estado>
	  <nifusuario>{nif}</nifusuario>
	  <pk_servicio>0</pk_servicio>
    </CambiarEstadoExpediente>
  </soap12:Body>
</soap12:Envelope>'''

action_cambiar_estado = "https://eadmin.dipualba.es/segex/wssegex.asmx/CambiarEstadoExpediente"


# CONSTANTES
USUARIO_BORRADO = "25382376J"
headers = {}

if len(sys.argv) < 5:
	print("\n")
	print("Uso borrar_expediente [entidad] [usuario] [password] [fichero]")
	print(''' 
	El script se conecta a la entidad [entidad] sedival pasada por parametro con los datos de conexión [usuario] y [password]
	y elimina los expedientes del fichero pasado como parametro. Este fichero se puede obtener como exportacion del buscador 
	de sedipualba.
	''')
	exit()
else:
	entidad = sys.argv[1]
	usuario = sys.argv[2]
	password = sys.argv[3]
	fichero = sys.argv[4]
	if not os.path.exists(fichero):
		print("Uso borrar_expediente [fichero]")
		exit()

print(time.strftime("%H:%M:%S"))
f = open(fichero, "r")
contador = 0
contador_error = 0
for l in f:
	linea = l.split(";")
	print(linea[0])


	# parse xml cambiar estado
	xml = parse_xml(xml_cambiar_estado, usuario, password, entidad, linea[0], USUARIO_BORRADO)
	headers["SOAPAction"] = action_cambiar_estado
	headers = CaseInsensitiveDict()
	headers["Content-Type"] = "application/soap+xml; charset=utf-8"

	# POST request
	response = requests.post(url, headers=headers, data=xml)

	# prints the response
	if response.status_code == 200:

		# parse xml cambiar estado
		xml = parse_xml(xml_borrar, usuario, password, entidad, linea[0], usuario_BORRADO)
		headers["SOAPAction"] = action_borrar
		headers = CaseInsensitiveDict()
		headers["Content-Type"] = "text/xml; charset=utf-8"

		# POST request
		response = requests.post(url, headers=headers, data=xml)

		# prints the response
		if response.status_code == 200:
			print("Borrado expediente... {0}".format(linea[0]))
			contador += 1
		else:
			print("Error borrando expediente")
			contador_error += 1

	else:
		print("Error borrando expediente")
		print(response.content)
		contador_error += 1



print(time.strftime("%H:%M:%S"))
print("Borrados: " + str(contador))
print("Con Error: " + str(contador_error))





