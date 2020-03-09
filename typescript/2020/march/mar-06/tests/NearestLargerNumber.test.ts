import { expect } from 'chai'
import { nearestLargerNumber } from '../src/NearestLargerNumber'

describe('Nearest Large Number', () => {

  it('should return 3', () => {
    const result : number | null = nearestLargerNumber([4, 1, 3, 5, 6], 0);
    expect(result).to.equal(3);
  })

  it('should return null', () => {
    const result : number | null = nearestLargerNumber([4, 1, 10, 5, 6], 2);
    expect(result).to.be.null;
  })

  it('should return 2', () => {
    const result : number | null = nearestLargerNumber([12, 1, 10, 5, 13], 2);
    expect(result).to.equal(2);
  })

  it('should return 4', () => {
    const result : number | null = nearestLargerNumber([12, 1, 10, 5, 13], 0);
    expect(result).to.equal(4);
  })
})