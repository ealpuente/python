import sqlite3

connection = sqlite3.connect('database.db')

with open('./bbdd/esquema.sql') as f:
	connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO entidad (tipo,nombre,nif,dir3,direccion,cp,localidad,telefono) VALUES ('A','ALFARRASI','P4602700I','L01460272','CALLE LEPANTO,2','46893','ALFARRASI','962297125')")

cur.execute("INSERT INTO entidad (tipo,nombre,nif,dir3,direccion,cp,localidad,telefono) VALUES ('A','ATZENETA DALBAIDA','P4600300J','L01460039','CALLE VERGE DELS DESEMPARATS, 38','46869','ATZENETA DALBAIDA','962359161')")

cur.execute("INSERT INTO entidad (tipo,nombre,nif,dir3,direccion,cp,localidad,telefono) VALUES ('A','BELGIDA','P4604700G','L01460478','CALLE VALENCIA, 1','46868','BELGIDA','962901074')")    

connection.commit()
connection.close()
