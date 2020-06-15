import { expect } from 'chai'
import { minJumps } from '../src/main'

describe('Min Jumps', () => {
  it('should return 3', () => {
    expect(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5])).to.eq(3)
  })

  it('should return 2', () => {
    expect(minJumps([6, 2, 4, 0, 5, 1, 1, 4, 2, 9])).to.eq(2)
  })
})
