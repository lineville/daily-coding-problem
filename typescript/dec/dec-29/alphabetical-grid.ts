// * Daily Coding Problem Dec 29th 2019

// * [Medium] -- Google

// * Given an N x M matrix of letters determine the number of columns that need to be removed
// * Such that each column is alphabetically ordered top to bottom

// ! Ex:
// * cba
// * daf
// * ghi

// * Column 2 needs to be deleted a is out of order

const columnsToDelete = (grid: Array<Array<string>>): number => {
  let result: number = 0

  if (grid.length === 0) {
    throw new Error('Empty grid')
  }

  const numColumns: number = grid[0].length
  for (let i: number = 0; i < numColumns; i++) {
    // * For each column
    let charCode: number = 0
    let sortedCol: boolean = true
    for (let j: number = 0; j < grid.length; j++) {
      let letter: string = grid[j][i]
      let letterVal: number = letter.charCodeAt(0)
      if (letterVal < charCode) {
        sortedCol = false
      }
      charCode = letterVal
    }
    if (!sortedCol) {
      result++
    }
  }
  return result
}

const testAlphabeticalGrid = (): void => {
  const input1: Array<Array<string>> = [
    ['c', 'b', 'a'],
    ['d', 'a', 'f'],
    ['g', 'h', 'i'],
  ]

  const input2: Array<Array<string>> = [['a', 'b', 'c', 'd', 'e', 'f']]

  const input3: Array<Array<string>> = [
    ['z', 'y', 'x'],
    ['w', 'v', 'u'],
    ['t', 's', 'r'],
  ]

  const expected1: number = 1
  const expected2: number = 0
  const expected3: number = 3

  const result1: number = columnsToDelete(input1)
  const result2: number = columnsToDelete(input2)
  const result3: number = columnsToDelete(input3)

  console.log(result1 === expected1 ? 'Passed' : 'Failed')
  console.log(result2 === expected2 ? 'Passed' : 'Failed')
  console.log(result3 === expected3 ? 'Passed' : 'Failed')
}

testAlphabeticalGrid()
