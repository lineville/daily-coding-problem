import { expect } from 'chai'
import { letterOrder } from '../src/main'

describe('letterOrder', () => {
  it('should return the correct order of the letters of this language', () => {
    const words = ['xww', 'wxyz', 'wxyw', 'ywx', 'ywz']
    expect(letterOrder(words)).to.deep.equal(['x', 'z', 'w', 'y'])
  })
})
