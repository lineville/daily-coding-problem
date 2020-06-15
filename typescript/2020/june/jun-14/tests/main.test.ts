import { expect } from 'chai'
import { allPrimesLessThanN } from '../src/main'

describe('All Primes Less Than N', () => {
  it('should return ', () => {
    expect(allPrimesLessThanN(20)).to.deep.equal([2, 3, 5, 7, 11, 13, 17, 19])
  })

  it('should return ', () => {
    const result = allPrimesLessThanN(100)
    console.log(result)
    expect(result.length).to.equal(25)
  })
})
