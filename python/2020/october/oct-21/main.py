
# * Daily Coding Problem October 21 2020

# * [Easy] -- Amazon

# * Write a function that takes a natural number as input and
# * returns the number of digits the input has.

# Constraint: don't use any loops.

# * This works but not clear if python is using loops under the hood to convert to string
def numberLength(n: int) -> int:
    return len(str(n))


def main():
    n = 12345
    result = numberLength(n)
    print(f"{n} has {result} digits")


# > python3 ./main.py
main()

# * ____________________________________TESTS____________________________________

# * To run tests:
# > pytest-3 ./main.py


def testNumberLength1():
    assert numberLength(1) == 1


def testNumberLength2():
    assert numberLength(12) == 2


def testNumberLength15():
    assert numberLength(123456789876543) == 15
