
'''

Definición de la clase archivo de apunte de registro y sus métodos

'''
import os
import xml.etree.ElementTree as et
import base64

class Apunte:
    
    def __init__(self, ruta) -> None:

        # Comprobamos la ruta pasada por parámetro
        if os.path.exists(ruta) and os.path.isfile(ruta) and os.path.splitext(ruta)[1] == ".xml":
            self.ruta = ruta
            self.directorio = os.path.split(ruta)[0]
            self.nombre = os.path.split(ruta)[1]

            self.__parse()

        else:
            raise FileNotFoundError

    def printAsiento(self):
        print(self.numero)
        print(self.fecha)
        print(self.extracto)
        print(self.asunto)
        print(self.expediente)
        print(self.interesados)

    def __str__(self) -> str:
        return(self.ruta)

    def __parse(self):
        
        # Recuperamos el nodo root del fichero xml
        tree = et.parse(self.ruta)
        root = tree.getroot()

        # Datos del asiento
        DatosElement = root.find("De_Asiento")
        self.numero = DatosElement.find('Numero_Registro').text
        self.fecha = DatosElement.find('Fecha_Hora').text
        self.extracto = DatosElement.find('Extracto').text
        self.asunto = DatosElement.find('Codigo_Asunto').text
        if DatosElement.find('Numero_Expediente'):
            self.expediente = DatosElement.find('Numero_Expediente').text


        # Interesados del asiento
        self.interesados = []
        for InteresadosElement in root.findall("De_Interesado"):
            interesado  = {}
            interesado['identificacion'] = InteresadosElement.find('Documento_Identificacion_Interesado').text
            interesado['nombre'] = InteresadosElement.find('Nombre_Interesado').text
            interesado['apellido1'] = InteresadosElement.find('Primer_Apellido_Interesado').text
            interesado['apellido2'] = InteresadosElement.find('Segundo_Apellido_Interesado').text
            if InteresadosElement.find('Provincia_Interesado'):
                interesado['provincia'] = InteresadosElement.find('Provincia_Interesado').text
            if InteresadosElement.find('Pais_Interesado'):
                interesado['pais'] = InteresadosElement.find('Pais_Interesado').text
            if InteresadosElement.find('Municipio_Interesado'):
                interesado['municipio'] = InteresadosElement.find('Municipio_Interesado').text
            if InteresadosElement.find('Direccion_Interesado'):
                interesado['direccion'] = InteresadosElement.find('Direccion_Interesado').text
            if InteresadosElement.find('Codigo_Postal_Interesado'):
                interesado['cp'] = InteresadosElement.find('Codigo_Postal_Interesado').text

            self.interesados.append(interesado)

        # Anexos del asiento
        self.anexos = []
        for AnexosElement in root.findall("De_Anexo"):
            anexo = {}
            anexo['nombre'] = AnexosElement.find('Nombre_Fichero').text
            anexo['fichero'] = AnexosElement.find('Anexo').text
            anexo['firma'] = AnexosElement.find('Firma').text
            
            self.anexos.append(anexo)


    def extraer(self, directorio):

        try:
            os.stat(directorio)
        except:
            os.mkdir(directorio)

        for index, anexo in enumerate(self.anexos):

            # Guardamos el anexo como fichero
            nombre_fichero = anexo['nombre'] + "_" + str(index) + ".pdf"
            nombre_fichero_firma = anexo['nombre'] + "_" + str(index) + "_firma.xsig"
            f = open(os.path.join(directorio, nombre_fichero), "wb")
            f.write(base64.b64decode(anexo['fichero']))
            f.close()

            f = open(os.path.join(directorio, nombre_fichero_firma), "wb")
            f.write(base64.b64decode(base64.b64decode(anexo['firma'])))
            f.close()


'''
        # Recuperamos el numero de expediente
        for num_registro in root.iter('Numero_Registro'):
            nreg = num_registro.text

        
        if nreg == None:
            print("Error recuperando numero de registro")
            exit

        # Por cada uno de los anexos en el apunte registral
        i = 1
        for elemento in root.iter('Anexo'):

            # Guardamos el anexo como fichero
            nombre_fichero = "fichero_" + nreg + "_" + str(i) + ".pdf"
            f = open(os.path.join(dir_salida, nombre_fichero), "wb")
            f.write(base64.b64decode(elemento.text))
            f.close()
            
            i += 1

'''