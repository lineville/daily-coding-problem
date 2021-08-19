import { expect } from 'chai'
import { pointsTransfered } from '../src/main'

describe('Elo Scoring System', () => {
  it('Should transfer a lot of points from p1 to p2', () => {
    const result = pointsTransfered(4000, 1400, false); // P2 upset over P1 
    expect(result).to.equal(500);
  })
})
