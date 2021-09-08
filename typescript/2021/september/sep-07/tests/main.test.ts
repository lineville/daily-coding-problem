import { expect } from 'chai'
import { Board } from '../src/main'

describe('3 x 3 sliding game', () => {
  it('Move pieces to find a solution', () => {
    let board = new Board()
    board.playForNMoves(10);
    expect(board.isSolved()).to.be.true
  })
})
