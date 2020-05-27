import { expect } from 'chai'
import { simpleFunction } from '../src/main'

describe('Main', () => {
  it('Hello World', () => {
    expect(simpleFunction()).to.equal('Hello World!')
  })
})
