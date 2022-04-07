
import xml.etree.ElementTree as ET


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

root = ET.fromstring(xml_ejemplo)
print(root.tag)
print(root.attrib)

for child in root:
  print(child.tag, child.attrib)

print(root[0][2].text)

for neighbor in root.iter('neighbor'):
  print(neighbor.attrib)

for country in root.findall('country'):
  rank = country.find('rank').text
  name = country.get('name')
  print(name, rank)

