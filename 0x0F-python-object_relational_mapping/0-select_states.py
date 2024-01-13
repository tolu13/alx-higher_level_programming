#!/usr/bin/python3

"""This script list all states
from the database:hbtn_0e_0_usa
"""

import MySQLdb
from sys import argv
if __name__ == '__main__':
    """This gives acess to the database
    and get the states from the database
    """
db_connection = MySQLdb.connect(
    host="localhost", user=argv[1], port=3306, passwd=argv[2], db=argv[3])

db_cursor = db_connection.cursor()

db_cursor.execute("SELECT *from states")

rows_selected = db_cursor.fetchall()

for row in rows_selected:
    print(row)
