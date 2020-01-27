import { expect } from 'chai'
import { noThreeConsecutive } from '../src/RemoveThreeConsecutive'

describe('Remove Three Consecutive Letters', function() {
  it('eedaaad', function() {
    let result: string = noThreeConsecutive('eedaaad')
    expect(result).to.equal('eedaad')
  })

  it('xxxtxxx', function() {
    let result: string = noThreeConsecutive('xxxtxxx')
    expect(result).to.equal('xxtxx')
  })

  it('uuuuxaaaaxuuu', function() {
    let result: string = noThreeConsecutive('uuuuxaaaaxuuu')
    expect(result).to.equal('uuxaaxuu')
  })
})
