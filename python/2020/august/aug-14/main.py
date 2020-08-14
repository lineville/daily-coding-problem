
# * Daily Coding Problem August 14 2020

# * [Hard] -- TwoSigma

# * A knight is placed on a given square on an 8 x 8 chessboard.
# * It is then moved randomly several times, where each move is
# * a standard knight move. If the knight jumps off the board
# * at any point, however, it is not allowed to jump back on.

# * After k moves, what is the probability that the knight remains on the board?


import random


BOARD_SIZE = 8


# def probabilityKnightRemains(start_x, start_y, steps):

#     # dp array
#     dp1 = [[[0 for i in range(BOARD_SIZE + 1)]
#             for j in range(BOARD_SIZE + 1)]
#            for k in range(BOARD_SIZE + 1)]

#     # For 0 number of steps, each
#     # position will have probability 1
#     for i in range(BOARD_SIZE):

#         for j in range(BOARD_SIZE):
#             dp1[i][j][0] = 1

#     # for every number of steps s
#     for s in range(1, steps + 1):

#         # for every position (x,y) after
#         # s number of steps
#         for x in range(BOARD_SIZE):

#             for y in range(BOARD_SIZE):
#                 prob = 0.0

#                 # For every position reachable from (x,y)
#                 for i in range(8):
#                     nx = x + dx[i]
#                     ny = y + dy[i]

#                     # if this position lie inside the board
#                     if (inside(nx, ny)):
#                         prob += dp1[nx][ny][s-1] / 8.0

#                 # store the result
#                 dp1[x][y][s] = prob

#     # return the result
#     return dp1[start_x][start_y][steps]


# * Prints out the board
def printBoard(board):
    print('\n'.join(['\t'.join([str(cell) for cell in row]) for row in board]))
    print("\n-----------------------------------------\n")


# * Initializes the board and places the knight at 4, 4
def initBoard(size):
    board = [[None for i in range(size)] for j in range(size)]
    board[4][4] = "🚀"
    return board


# * Finds the location of the knight on the board
def knightLocation(board):
    for i, row in enumerate(board):
        try:
            idx = row.index("🚀")
            return i, idx
        except:
            pass

    return False


# * Randomly moves a knight to one of the 8 possible locations and returns the new board
def moveKnight(board):
    row, col = knightLocation(board)
    nextRow, nextCol = row, col
    randomJump = random.randint(0, 7)
    if randomJump == 0:
        nextRow += 1
        nextCol += 2
    elif randomJump == 1:
        nextRow += 2
        nextCol += 1
    elif randomJump == 2:
        nextRow += 1
        nextCol -= 2
    elif randomJump == 3:
        nextRow += 2
        nextCol -= 1
    elif randomJump == 4:
        nextRow -= 1
        nextCol += 2
    elif randomJump == 5:
        nextRow -= 2
        nextCol += 1
    elif randomJump == 6:
        nextRow -= 1
        nextCol -= 2
    elif randomJump == 7:
        nextRow -= 2
        nextCol -= 1

    if nextRow < 0 or nextRow >= BOARD_SIZE or nextCol < 0 or nextCol >= BOARD_SIZE:
        board[row][col] = None
    else:
        board[row][col], board[nextRow][nextCol] = board[nextRow][nextCol], board[row][col]

    return board


# * Simulates a knight jumping over rounds number of simulations and returns the average
# * If verbose is true board will be printed
def simulateJumps(rounds, verbose):
    result = 0

    for i in range(rounds):
        board = initBoard(BOARD_SIZE)
        jumps = 0
        while knightLocation(board):
            moveKnight(board)
            if verbose:
                printBoard(board)
            jumps += 1
        result += jumps
    return result / rounds


def main():
    rounds = 100000
    verbose = False

    print("Random knight jumping simulator\n-----------------------------------\n")
    print(
        f"Average jumps after {rounds} of simulations --> {simulateJumps(rounds, verbose)}")


main()
