#!/usr/bin/python3

if __name__ == "__main__":
    """Print the number of lists and arguements."""
import sys

num_arguments = len(sys.argv) - 1

if num_arguments == 0:
    print("0 arguments.")
    exit()

if num_arguments == 1:
    print("1 argument:")
else:
    print(f"{num_arguments} arguments:")

for i, arg in enumerate(sys.argv[1:], start=1):
    print(f"{i}: {arg}")
