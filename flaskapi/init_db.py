import sqlite3

conn = sqlite3.Connection("personas.db")

try:
    f = open("schema.sql", "r")
    conn.executescript(f.read())
    f.close()

    c = conn.cursor()
    c.execute("INSERT INTO PERSONA(NOMBRE, APELLIDOS) VALUES (?,?)", ("Elias", "Alpuente"))
    c.execute("INSERT INTO PERSONA(NOMBRE, APELLIDOS) VALUES (?,?)", ("Pepito", "Pérez"))
    conn.commit

except Exception as e:
    print("Error creando esquema de base de datos")
    print(e)

conn.close()