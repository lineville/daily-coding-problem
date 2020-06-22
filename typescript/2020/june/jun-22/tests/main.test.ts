import { expect } from 'chai'
import { egyptianFraction } from '../src/main'

describe('Egyptian Fraction', () => {
  it('should return ', () => {
    expect(egyptianFraction(4, 13)).to.deep.equal([4, 18, 468])
  })
})
