#!/usr/bin/python3
if __name__ == "__main__":
    """Print the addition of all arguements"""
    import sys

    sum_result = 0

    for arg in sys.argv[1:]:
        sum_result += int(arg)

    print(sum_result)
