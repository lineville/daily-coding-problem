import { expect } from 'chai'
import { isCycle } from '../src/main'

describe('Cycle Words', () => {
  it('should return true', () => {
    expect(isCycle(['chair', 'height', 'racket', 'touch', 'tunic'])).to.be.true
  })

  it('should return false', () => {
    expect(isCycle(['chair', 'height', 'racket', 'touch', 'tunnel'])).to.be
      .false
  })
})
