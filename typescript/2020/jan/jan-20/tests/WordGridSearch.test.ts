import { expect } from 'chai'
import { exists } from '../src/WordGridSearch'

describe('Word Grid Search', function() {
  const board: Array<Array<string>> = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  it('exists : ABCCED', function() {
    let result: boolean = exists(board, 'ABCCED')
    expect(result).to.be.true
  })

  it('exists : SEE', function() {
    let result: boolean = exists(board, 'SEE')
    expect(result).to.be.true
  })

  it('exists : ABCD', function() {
    let result: boolean = exists(board, 'ABCD')
    expect(result).to.be.false
  })
})
