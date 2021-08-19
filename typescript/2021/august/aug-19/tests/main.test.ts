import { expect } from 'chai'
import { isToeplitzMatrix } from '../src/main'

describe('isToeplitzMatrix', () => {
  it('should check if the matrix is a toeplitz matrix', () => {
    const matrix = [
      [1, 2, 3, 4, 8],
      [5, 1, 2, 3, 4],
      [4, 5, 1, 2, 3],
      [7, 4, 5, 1, 2]
    ]
    expect(isToeplitzMatrix(matrix)).to.be.true
  })

    it('should check if the matrix is a toeplitz matrix', () => {
      const matrix = [
        [1, 2, 3, 4, 8],
        [5, 1, 2, 3, 5],
        [4, 5, 1, 2, 3],
        [7, 4, 5, 1, 2],
      ]
      expect(isToeplitzMatrix(matrix)).to.be.false
    })
})
