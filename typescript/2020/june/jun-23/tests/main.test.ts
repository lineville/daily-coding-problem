import { expect } from 'chai'
import { zigzag } from '../src/main'

describe('Zigzag', () => {
  it('should print out thisisazigzag in a zigzag of 4 rows', () => {
    expect(zigzag('thisisazigzag', 4)).to.not.throw
  })

  it('should print out liamloveslindaveryverymuch in a zigzag of 6 rows', () => {
    expect(zigzag('liamloveslindaveryverymuch', 6)).to.not.throw
  })
})
