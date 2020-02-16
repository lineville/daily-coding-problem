import { expect } from 'chai'
import howManyRounds from '../src/CoinFlip'

describe('How Many Rounds', function() {
  it('n = 12', function() {
    const result: number = howManyRounds(12)
    expect(result).to.equal(4)
  })

  it('n = 100', function() {
    const result: number = howManyRounds(100)
    expect(result).to.equal(7)
  })
})
