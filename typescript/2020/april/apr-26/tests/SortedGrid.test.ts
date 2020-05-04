import {expect} from 'chai'
import {numbersLessThanAndGreaterThan} from '../src/SortedGrid'

describe('Gets the number of values less than 6 and greater than 23', () => {

  it('should return 15', () => {
    const result = numbersLessThanAndGreaterThan([
      [1, 3, 7, 10, 15, 20],
      [2, 6, 9, 14, 22, 25],
      [3, 8, 10, 15, 25, 30],
      [10, 11, 12, 23, 30, 35],
      [20, 25, 30, 35, 40, 45],
    ], 1, 1, 3, 3)
    expect(result).to.equal(14)
  })
})