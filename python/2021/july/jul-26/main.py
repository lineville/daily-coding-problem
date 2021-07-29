# Daily Coding Problem July 26 2021

# [Easy] -- Microsoft

# Given a 2D matrix of characters and a target word, 
# write a function that returns whether the word can 
# be found in the matrix by going left-to-right, or up-to-down.

# For example, given the following matrix:

# [['F', 'A', 'C', 'I'],
#  ['O', 'B', 'Q', 'P'],
#  ['A', 'N', 'O', 'B'],
#  ['M', 'A', 'S', 'S']]

# and target word FOAM you should return true, same for MASS

def wordExists(matrix, targetWord):
    x = 0
    y = 0
    # Check left to right first then top to bottom then move on
    currentWord = ""
    while x < len(matrix):
        currentWord += matrix[x][y]

    if targetWord in currentWord:
        return True
    else:
        

    if not matrix:
        return False
    else:
        return True


def main():
    print(wordExists([['F', 'A', 'C', 'I'],
                      ['O', 'B', 'Q', 'P'],
                      ['A', 'N', 'O', 'B'],
                      ['M', 'A', 'S', 'S']], 'FOAM'))

main()