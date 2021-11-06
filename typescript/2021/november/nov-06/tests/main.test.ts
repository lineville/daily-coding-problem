import { expect } from 'chai'
import { canShift } from '../src/main'

describe('Checks if word a can be shifted to work b', () => {
  it('should be true', () => {
    expect(canShift('abcde', 'cdeab')).to.be.true
  })
  it('should be false', () => {
      expect(canShift('abcde', 'cabde')).to.be.false
  })
})
