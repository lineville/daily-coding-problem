// * Daily Coding Problem Jan 20 2020

// * [Easy] -- Coursera

/**
 * * Given a 2D board of characters and a word, find if the word exists in the grid.
 * * The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells
 * * are those horizontally or vertically neighboring.
 * * The same letter cell may not be used more than once.
 */

// ! EX: [
// *   ['A','B','C','E'],
// *   ['S','F','C','S'],
// *   ['A','D','E','E']
// * ]

// * exists("ABCCED") => true
// * exists("SEE") => true
// * exists("ABCD") => false

type Cell = { row: number; col: number }

export const exists = (board: Array<Array<string>>, word: string): boolean => {
  let result: boolean = false

  // * Find next occurrence of first letter if there is one. If none, then false
  // * Check if next letter is a neighbor, if so go there and search if next letter is neighbor ...
  // * If we keep finding next letter in neighbors until word is empty, return true.
  // * If we could not find next letter among neighbors, find next occurrence of first letter try again.
  let nexFirstLetterLocation: Cell | null = nextOccurrenceOfFirstLetter(
    board,
    word[0],
    { row: 0, col: 0 }
  )

  if (nexFirstLetterLocation === null) {
    return false
  }

  return false
}

const nextOccurrenceOfFirstLetter = (
  board: Array<Array<string>>,
  letter: string,
  prevOccurence: Cell
): Cell | null => {
  for (let i: number = prevOccurence.row; i < board.length; i++) {
    for (let j: number = prevOccurence.col; j < board[0].length; j++) {
      let val: string = board[i][j]
      if (val === letter) {
        return { row: i, col: j }
      }
    }
  }
  return null
}
