
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import sqlite3

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////personas.db'
db = SQLAlchemy(app)

def getConnection():
    try:
        conn = sqlite3.connect("personas.db")
    except Exception as e:
        print("Error abriendo conexión con la base de datos")
        print(e)
        return None
    return conn

# Lista de personas
@app.route("/persona", methods=['GET'])
def persona_lista():

    conn = getConnection()

    contenido = {
      "detalles": "Hubo un error en la solicitud"
    }
    resp = jsonify(contenido)
    resp.status_code = 200 

    return resp

# Detalle de persona
@app.route("/persona/<int:id>", methods=['GET'])
def persona_detalle():
    return ""

# Creación de persona
@app.route("/persona", methods=['POST'])
def persona_creacion():
    return ""

# Actualización de persona
@app.route("/persona/<int:id>", methods=['PUT'])
def persona_actualizacion():
    return ""

# Borrado de persona
@app.route("/persona/<int:id>", methods=['DELETE'])
def persona_borrado():
    return ""
