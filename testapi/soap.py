from cgitb import text
from email import header
import requests
from requests.structures import CaseInsensitiveDict
import calculateToken
import xml.etree.ElementTree as ET


# SOAP request URL
url = "https://pre-46000.sedipualba.es/seres/Servicios/wsseresregistro.asmx"
  
# structured XML
xml = '''<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
        <FilterRegistros xmlns="http://sedipualba.es/wsSeresV1.2">
            <wssegUser>{usuario}</wssegUser>
            <wssegPassword>{token}</wssegPassword>
            <wsEntidad>46000</wsEntidad>
            <filtro>
                <Tipo>E</Tipo>
                <Ejercicio>2022</Ejercicio>
                <Estado>Completo</Estado>
            </filtro>
            <orden>true</orden>
            <pagina>1</pagina>
        </FilterRegistros>
    </soap:Body>
</soap:Envelope>'''.format(usuario="ealpuente", token=calculateToken.calculateToken("n0nxzZ1UOrXKPEKCFEcLrkU7h"))

# headers
headers = CaseInsensitiveDict()
headers["Content-Type"] = "text/xml; charset=utf-8"
headers["SOAPAction"] = "http://sedipualba.es/wsSeresV1.2/FilterRegistros"



# POST request
response = requests.post(url, headers=headers, data=xml)

# prints the response
#print(response.text)


from xml.dom import minidom

mydoc = minidom.parseString(response.text)
items = mydoc.getElementsByTagName('EntradaSalidaViewModel')

for i in items:
  print(i.childNodes[0].text)





