#!/usr/bin/python3
"""
This script lists all states from the
database `hbtn_0e_0_usa` with names starting
with the letter 'N'
"""

import MySQLdb as db
from sys import argv
"""
Access to database
"""

if __name__ == '__main__':
    db_connect = db.connect(
        host="localhost", user=argv[1], port=3306, passwd=argv[2], db=argv[3])
    db_cursor = db_connect.cursor()

    db_cursor.execute("SELECT * FROM states WHERE name LIKE  'N%' ORDER BY id")

    rows_selected = db_cursor.fetchall()
    print("Number of Rows Fetched:", len(rows_selected))

    for row in rows_selected:
        print(row)

