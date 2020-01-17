import { expect, assert } from 'chai'
import { numParensToRemove } from '../src/SymbolMatcher'

describe('SymbolMatcher', () => {
  it('numParensToRemove ()())()', () => {
    let result = numParensToRemove('()())()')
    expect(result).equal(1)
  })

  it('numParensToRemove )(', () => {
    let result = numParensToRemove(')(')
    expect(result).equal(2)
  })

  it('numParensToRemove ((()())())', () => {
    let result = numParensToRemove('((()())())')
    expect(result).equal(0)
  })

  it('numParensToRemove )))()', () => {
    let result = numParensToRemove(')))()')
    expect(result).equal(3)
  })

  it('numParensToRemove ((()(bad', () => {
    assert.throw(() => numParensToRemove('bad'), 'Not a paren!')
  })
})
