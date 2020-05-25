import { expect } from 'chai'
import { smallestPositiveNotInSubset } from '../src/main'

describe('Smallest Number not in subset', () => {
  it('should return 7', () => {
    const result = smallestPositiveNotInSubset([1, 2, 3, 10])
    expect(result).to.eq(7)
  })

  it('should return 10', () => {
    const result = smallestPositiveNotInSubset([1, 1, 3, 4])
    expect(result).to.eq(10)
  })
})
