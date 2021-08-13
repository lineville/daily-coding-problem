import { expect } from 'chai'
import {
  greatestCommonDenominator,
  greatestCommonDenominatorHelper,
  greatestCommonDenominatorEuclidean,
} from '../src/main'

describe('Greatest Common Denominator', () => {
  it('should return the greatest common denominator of the list of numbers', () => {
    const nums = [42, 56, 14]
    expect(
      greatestCommonDenominator(nums, greatestCommonDenominatorHelper)
    ).to.equal(14)
  })

  it('should return the greatest common denominator of the list of numbers', () => {
    const nums = [42, 56, 14]
    expect(
      greatestCommonDenominator(
        nums,
        greatestCommonDenominatorEuclidean
      )
    ).to.equal(14)
  })
})
