import os
import openpyxl

'****************************************************'
'**** Obtiene la lista de archivos a transformar ****'
'****************************************************'
def lista_archivos():
	'Recupera todos los archivos del directorio actual'
	archivos = os.listdir(".")

	'Filtramos sólo los archivos excel'
	archivos_filter = []
	for a in archivos:
		if a.endswith(".xlsx") or a.endswith(".xls"):
			archivos_filter.append(a)

	'Devolvemos la lista de archivos excel'
	return archivos_filter

def decodificar_provincia(codigo):
	return ('Valencia')

def decodificar_municipio(codigo):
	return ('Gilet')

'**********************************************************'
'**** Transforma el archivo excel pasado por parámetro ****'
'**********************************************************'
def transformar_archivo(archivo):

	'Abrimos el archivo excel origen'
	wb = openpyxl.load_workbook(archivo)
	sheet = wb.active

	'Creamos el wb de salida'
	out_wb = openpyxl.Workbook()
	out_ws = out_wb.active
	out_ws.title = "Ciudadanos"

	'Insertamos las cabeceras'
	out_ws.append([
	'NIFCIF',
	'Nombre',
	'Apellido1',
	'Apellido2',
	'FecNacimiento',
	'Denominacion',
	'TipoVia',
	'NombreVia',
	'NumVia',
	'EscPisPue',
	'EntidadMenor',
	'Direccion',
	'CodPostal',
	'DesProvincia',
	'DesMunicipio',	
	'Observaciones',
	'FechaAlta',
	'Telefono1',
	'Telefono2',
	'Telefono3',
	'CorreoElectronico1',	
	'CorreoElectronico2',	
	'CorreoElectronico3'])

	'Recorremos las filas del fichero'
	for row in sheet.iter_rows(min_row=2, max_col=10, values_only=True):

		'Campo nifcif'
		nifcif = row[1]
		if (row[0] == 'N' or row[0] == 'E'):
			persona = 'F'
		elif (row[0] == 'C' or row[0] == 'P'):
			persona = 'J'
		else:
			continue

		'Validamos el nifcif'

		'Nombre, apellido1, apellido2'
		if (persona == 'F'):
			nombre = row[2]
			apellido1 = row[3]	
			apellido2 = row[4]
			denominacion = nombre + " " + apellido1 + " " + apellido2
		else:
			nombre = ''
			apellido1 = ''	
			apellido2 = ''
			denominacion = row[2]

		'direccion y cp'
		direccion = row[8]
		cp = row[9]

		'provincia'
		provincia = decodificar_provincia(row[7])

		'municipio'
		municipio = decodificar_municipio(row[6])

		'Formamos la fila para añadir'
		out_ws.append([
			nifcif,
			nombre,
			apellido1,
			apellido2,
			'',
			denominacion,
			'',
			'',
			'',
			'',
			'',
			direccion,
			cp,
			provincia,
			municipio,	
			'',
			'',
			'',
			'',
			'',
			'',	
			'',	
			''])

	'Guardamos el fichero de salida'
	nombre_fout = os.path.splitext(os.path.basename(a))[0] + "_out" + os.path.splitext(os.path.basename(a))[1]
	out_wb.save(nombre_fout)






'*************************************'
'**** Cuerpo principal del script ****'
'*************************************'
archivos = lista_archivos()

for a in archivos:
	transformar_archivo(a)