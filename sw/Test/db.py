import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="hdmsw201920",
    database="anmelden"
)

mycursor = mydb.cursor()

sql = "INSERT INTO user (id, vorname, nachname, email, passwort, username, geburtsdatum) VALUES (%s, %s, %s, %s, %s, %s, %s)"
val = ("44", "Hello", "Hello", "Hello", "Hello", "Hello", "Hello")
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
