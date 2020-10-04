
# * Daily Coding Problem October 1 2020

# * [Easy] -- Palantir

# * A typical American-style crossword puzzle grid is an N x N matrix with
# * black and white squares, which obeys the following rules:

# * Every white square must be part of an "across" word and a "down" word.
# * No word can be fewer than three letters long.
# * Every white square must be reachable from every other white square.
# * The grid is rotationally symmetric(for example, the colors of the top left and bottom right squares must match).
# * Write a program to determine whether a given matrix qualifies as a crossword grid.
from enum import Enum
from pprint import pprint
from typing import List


class Square(Enum):
    WHITE = "WHITE"
    BLACK = "BLACK"


def isCrosswordBoard(board: List[List[Square]]) -> bool:
    return True


def main():
    print("Crossword board validator")

    board = [
        [Square.WHITE, Square.BLACK],
        [Square.WHITE, Square.BLACK],
        [Square.WHITE, Square.BLACK],
        [Square.WHITE, Square.BLACK],
    ]

    pprint(board)


main()


# ________________________TESTS_________________________


def testIsCrosswordBoard():
    board = [
        [Square.BLACK, Square.WHITE, Square.BLACK],
        [Square.BLACK, Square.WHITE, Square.BLACK],
        [Square.BLACK, Square.WHITE, Square.BLACK],
    ]
    assert isCrosswordBoard(board) == True
