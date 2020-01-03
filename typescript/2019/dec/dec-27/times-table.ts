// * Daily Coding Problem Dec 27th

// * [Medium] -- Apple

/**
 * * Suppose you have a multiplication table that is N by N.
 * * That is, a 2D array where the value at the i-th row and j-th column is (i + 1) * (j + 1) (if 0-indexed).
 * * Given integers N and X, write a function that returns the number of times X appears as a value in an N by N multiplication table.
 * * For example, given N = 6 and X = 12, you should return 4, since the multiplication table looks like this:
 * * 1 2 3 4 5 6
 * * 2 4 6 8 10 12
 * * 3 6 9 12 15 18
 * * 4 8 12 16 20 24
 * * 5 10 15 20 25 30
 * * 6 12 18 24 30 36
 *
 * * Should return 4 since 12 has four occurrences in this 6x6 table
 * *
 */

const createTable = (size: number): Array<Array<number>> => {
  let table: Array<Array<number>> = []
  for (let i: number = 0; i < size; i++) {
    let row: Array<number> = []
    for (let j: number = 0; j < size; j++) {
      row[j] = (i + 1) * (j + 1)
    }
    table.push(row)
  }
  return table
}

const timesTableOccurrences = (n: number, x: number): number => {
  let result: number = 0
  const timesTable: Array<Array<number>> = createTable(n)
  for (let i: number = 0; i < n; i++) {
    for (let j: number = 0; j < n; j++) {
      if (timesTable[i][j] === x) {
        result++
      }
    }
  }
  return result
}

const testTimesTable = (): void => {
  const inputSize: number = 6
  const inputTargetNum: number = 12
  const expectedResult: number = 4
  const result: number = timesTableOccurrences(inputSize, inputTargetNum)
  console.log(
    result === expectedResult
      ? 'Passed'
      : 'Failed. Expected ' + expectedResult + ' but got ' + result
  )
}

testTimesTable()
