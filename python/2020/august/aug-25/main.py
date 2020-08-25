
# * Daily Coding Problem August 25 2020

# * [Easy] -- Google

# * In linear algebra, a Toeplitz matrix is one in which the elements on
# * any given diagonal from top left to bottom right are identical.

# * Write a program to determine whether a given input is a Toeplitz matrix.


def checkDiagonal(mat, i, j):
    res = mat[i][j]
    i += 1
    j += 1
    rows = len(mat)
    cols = len(mat[0])

    while (i < rows and j < cols):

        # mismatch found
        if (mat[i][j] != res):
            return False

        i += 1
        j += 1

    # we only reach here when all elements
    # in given diagonal are same
    return True


def isToeplitz(mat):

    rows = len(mat)
    cols = len(mat[0])

    for j in range(rows - 1):

        # check descending diagonal starting from
        # position (0, j) in the matrix
        if not(checkDiagonal(mat, 0, j)):
            return False

    for i in range(1, cols - 1):

        # check descending diagonal starting
        # from position (i, 0) in the matrix
        if not(checkDiagonal(mat, i, 0)):
            return False

    return True


def main():
    matrix = [
        [1, 2, 3, 4, 8],
        [5, 1, 2, 3, 4],
        [4, 5, 1, 2, 3],
        [7, 4, 5, 1, 2]
    ]
    print('\n'.join(['\t'.join([str(cell) for cell in row])
                     for row in matrix]))
    print(f"Toeplitz matrix ? {isToeplitz(matrix)}")


main()


# --------------------------TESTs----------------------------

def testIsToeplitz1():
    matrix = [

        [1, 2, 3, 4, 8],
        [5, 1, 2, 3, 4],
        [4, 5, 1, 2, 3],
        [7, 4, 5, 1, 2]
    ]
    assert isToeplitz(matrix) == True


def testIsToeplitz2():
    matrix = [
        [1, 5, 3, 4, 8],
        [5, 1, 2, 3, 4],
        [4, 5, 1, 2, 3],
        [7, 4, 5, 1, 2]
    ]
    assert isToeplitz(matrix) == False


def testIsToeplitz3():
    matrix = [
        [6, 7, 8, 9],
        [4, 6, 7, 8],
        [1, 4, 6, 7],
        [0, 1, 4, 6],
        [2, 0, 1, 4]
    ]
    assert isToeplitz(matrix) == True
