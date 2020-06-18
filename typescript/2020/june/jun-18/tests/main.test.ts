import { expect } from 'chai'
import { max, maxSimple } from '../src/main'

describe('Max of two numbers', () => {
  it('No comparisons: should return 10', () => {
    expect(max(3, 10)).to.equal(10)
  })

  it('Normal method: should return 10', () => {
    expect(maxSimple(3, 10)).to.equal(10)
  })
})
