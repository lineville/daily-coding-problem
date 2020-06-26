import { expect } from 'chai'
import { solvePuzzle } from '../src/main'

describe('Crypto Puzzle', () => {
  it('SEND + MORE = MONEY', () => {
    const expectedResult = new Map<string, number>()
    expectedResult.set('S', 9)
    expectedResult.set('E', 5)
    expectedResult.set('N', 6)
    expectedResult.set('D', 7)
    expectedResult.set('M', 1)
    expectedResult.set('O', 0)
    expectedResult.set('R', 8)
    expectedResult.set('Y', 2)
    expect(solvePuzzle('SEND', 'MORE', 'MONEY')).to.deep.equal(expectedResult)
  })
})
