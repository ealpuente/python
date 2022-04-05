import requests
# SOAP request URL
url = "https://pre-46000.sedipualba.es/seres/Servicios/wsseresregistro.asmx"
  
# structured XML
payload = """<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <FilterRegistros xmlns="https://pre-46000.sedipualba.es/wsSeresV1.2">
      <wssegUser>ealpuente</wssegUser>
      <wssegPassword>n0nxzZ1UOrXKPEKCFEcLrkU7h</wssegPassword>
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
</soap:Envelope>"""


# headers
headers = {
    'Content-Type': 'text/xml; charset=utf-8',
    'SOAPAction': "http://sedipualba.es/wsSeresV1.2/FilterRegistros"
}


# POST request
response = requests.request("POST", url, headers=headers, data=payload)
  
# prints the response
print(response.text)
print(response)

