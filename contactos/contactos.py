
import sqlite3
from flask import Flask, render_template
from werkzeug.exceptions import abort

app = Flask(__name__)

''' MODELO '''
def get_db_connection():
	conn = None
	try:
		conn = sqlite3.connect('database.db')
		print(sqlite3.version)
	except Error as e:
		print(e)
		
	return conn

def get_db_entidad(id_entidad):
	conn = get_db_connection()
	entidad = conn.execute('SELECT * FROM entidad WHERE ID = ?', (id_entidad)).fetchall()
	conn.close()

	if entidad == None:
		abort('404')

	return entidad

def get_db_lista_entidades():
	lista = None
	conn = get_db_connection()
	if conn != None:
		lista = conn.execute('SELECT * FROM entidad').fetchall()

	if lista == None:
		abort('404')

	return lista


''' CONTROLADOR '''
@app.route("/")
def inicio():
	lista = get_db_lista_entidades()
	return render_template("index.html", entidades = lista)

@app.route("/detalle/<string:id_entidad>")
def detalle(id_entidad):
	entidad = get_db_entidad(id_entidad)
	return render_template("detalle.html", entidad=entidad[0])
