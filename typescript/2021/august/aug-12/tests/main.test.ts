import { expect } from 'chai'
import { exists } from '../src/main'

describe('Element Exists', () => {
  it('should return true if element exists', () => {
    expect(exists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).to.be.true
  })

    it('should return true if element exists', () => {
      expect(exists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)).to.be.false
    })
})
