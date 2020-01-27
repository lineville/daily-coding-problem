### Liam Neville Daily Coding Problem Oct 23

## Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

def sumNonAdjacent(nums):







    return 0


def main():
    print("Sum of Non-Adjacent numbers")
    inputNums1 = [2, 4, 6, 2, 5] # should return 13
    inputNums2 = [5, 1, 1, 5] # should return 10
    inputNums3 = [-5, 2, 3, 4, 1] # should return 6

    result1 = sumNonAdjacent(inputNums1)

main()