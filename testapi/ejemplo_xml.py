
import xml.etree.ElementTree as ET

'''
Ejemplo de uso del tratamiento de un xml que se obtiene como respuesta a la llamada de un servicio web

'''

xml_ejemplo = '''<?xml version="1.0"?>
<data>
    <country name="Liechtenstein">
        <rank>1</rank>
        <year>2008</year>
        <gdppc>141100</gdppc>
        <neighbor name="Austria" direction="E"/>
        <neighbor name="Switzerland" direction="W"/>
    </country>
    <country name="Singapore">
        <rank>4</rank>
        <year>2011</year>
        <gdppc>59900</gdppc>
        <neighbor name="Malaysia" direction="N"/>
    </country>
    <country name="Panama">
        <rank>68</rank>
        <year>2011</year>
        <gdppc>13600</gdppc>
        <neighbor name="Costa Rica" direction="W"/>
        <neighbor name="Colombia" direction="E"/>
    </country>
</data>'''

# Parsear el archivo y obtener el nodo raiz
root = ET.fromstring(xml_ejemplo)
print("*********** NODO RAIZ **********")
print(root.tag)
print(root.attrib)

# Acceder a los nodos hijos
print("*********** ACCESO A LOS NODOS HIJOS **********")
for child in root:
  print(child.tag, child.attrib)
  for subchild in child:
    print("\t", subchild.tag, subchild.attrib, subchild.text)
  print("\n")

# Acceso a los hijos mediante listas
print("*********** ACCESO A LOS NODOS HIJOS: LISTAS **********")
print(root[0][0].tag, ": ", root[0][0].text)
for c in range(len(root)):
  print(root[c].tag, root[c].attrib)

print("*********** ITERAR POR EL ARBOL: ITER **********")
# Recorre todo el arbol buscando nodos con tag especificado e imprime sus atributos (direccionario)
for neighbor in root.iter('neighbor'):
  print(neighbor.attrib)
  print(neighbor.attrib['name'])

print("*********** ITERAR POR EL ARBOL: FINDALL **********")
for country in root.findall('country'):
  rank = country.find('rank').text
  name = country.get('name')
  print(name, rank)

'''



for country in root.findall('country'):
  rank = country.find('rank').text
  name = country.get('name')
  print(name, rank)

'''