 
import re

def extraer_texto(linea):
    pos1 = linea.find('"') + 1
    pos2 = linea.find('"', pos1 + 1)
    text = linea[pos1:pos2]

    text = text.replace('<br/>', '')
    return text.strip()
"""     text = text.replace('&oacute;', 'ó')
    text = text.replace('&aacute;', 'á')
    text = text.replace('&iacute;', 'í')
    text = text.replace('&eacute;', 'é')
    text = text.replace('&uacute;', 'ú')
    text = text.replace('&ntilde;', 'ñ')
    text = text.replace('&iquest;', '¿')
 """


class Pregunta:
    pregunta = ""
    respuesta_a = ""
    respuesta_b = ""
    respuesta_c = ""
    respuesta_d = ""
    pregunta_id = ""
    correcta = ""

    def completo(self):
        if (self.pregunta != "" and 
            self.respuesta_a != "" and 
            self.respuesta_b != "" and 
            self.respuesta_c != "" and 
            self.respuesta_d != "" and 
            self.pregunta_id != "" and 
            self.correcta != ""):
            return True
        else:
            return False

    def limpiar(self):
        self.pregunta = ""
        self.respuesta_a = ""
        self.respuesta_b = ""
        self.respuesta_c = ""
        self.respuesta_d = ""
        self.pregunta_id = ""
        self.correcta = ""        

    def __str__(self):
        return self.pregunta[:3] + " " + self.respuesta_a[:3] + " " + self.respuesta_b[:3] + " " + self.respuesta_c[:3] + " " + self.respuesta_d[:3] + " " + self.pregunta_id[:3] + " " +  self.correcta[:3]

def grabar_pregunta(p: Pregunta):
    o.write('"'+ p.pregunta_id + '": {\n')
    o.write('"id": "'+ p.pregunta_id + '",\n')
    o.write('"pregunta": "' + p.pregunta + '",\n')
    o.write('"respuesta_a": "' + p.respuesta_a + '",\n')
    o.write('"respuesta_b": "' + p.respuesta_b + '",\n')
    o.write('"respuesta_c": "' + p.respuesta_c + '",\n')
    o.write('"respuesta_d": "' + p.respuesta_d + '",\n')
    o.write('"categoria": "",\n')
    if (p.correcta == '0'):
        o.write('"correcta": "A"\n')
    elif (p.correcta == '1'):
        o.write('"correcta": "B"\n')
    elif (p.correcta == '2'):
        o.write('"correcta": "C"\n')
    elif (p.correcta == '3'):
        o.write('"correcta": "D"\n')
    o.write('},\n')

f = open("./itil2.js", "r")
o = open("./itil2_output.json", "w", encoding='iso8859_15')

# Escribimos cabecera de fichero
o.write('{\n')

p = Pregunta()

for linea in f:

    if (linea.find("questions") > 0):
        p.pregunta = extraer_texto(linea)
        continue

    r = re.search('choices\[([0-9])+\]\[0\]', linea)
    if (r):
        p.respuesta_a = extraer_texto(linea)
        continue

    r = re.search('choices\[([0-9])+\]\[1\]', linea)
    if (r):
        p.respuesta_b = extraer_texto(linea)
        continue

    r = re.search('choices\[([0-9])+\]\[2\]', linea)
    if (r):
        p.respuesta_c = extraer_texto(linea)
        continue

    r = re.search('choices\[([0-9])+\]\[3\]', linea)
    if (r):
        p.respuesta_d = extraer_texto(linea)
        continue

    r = re.search('answers\[', linea)
    if (r):
        p.correcta = linea[linea.find('=') + 2].strip()
        continue

    r = re.search('preguntaids', linea)
    if (r):
        p.pregunta_id = linea[linea.find('=') + 2:].strip()
        continue

    if (p.completo()):
        grabar_pregunta(p)
        p.limpiar()

# Escribimos final de fichero
o.write('}')

f.close()

