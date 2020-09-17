
# * Daily Coding Problem August 26 2020

# * [Medium] -- Snapchat

# * You are given an array of length N, where each element i represents
# * the number of ways we can produce i units of change.

# ! Ex:  [1, 0, 1, 1, 2] would indicate that there is only one way to make 0, 2, or 3 units,
# ! and two ways of making 4 units.

# * Given such an array, determine the denominations that must be in use.
# * In the case above, for example, there must be coins with value 2, 3, and 4.

from typing import List


def denominations(arr: List[int]) -> List[int]:
    result = []

    return result


def main():
    arr = [1, 0, 1, 1, 2]

    for i, x in enumerate(arr):
        print(f"{x} ways to produce {i} units of change")

    print(f"Denominations --> {denominations(arr)}")


main()


# ---------------------------------TESTS--------------------------------------

def testDenominations1():
    assert denominations([1, 0, 1, 1, 2]) == [2, 3, 4]
