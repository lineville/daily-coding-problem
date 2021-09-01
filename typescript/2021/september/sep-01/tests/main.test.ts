import { expect } from 'chai'
import { leastNumTurns } from '../src/main'

describe('Snakes & Ladders', () => {
  it('Should find least number of turns to complete the game', () => {
    const snakes = new Map<number, number>();
    snakes.set(16, 6);
    snakes.set(48, 26);
    snakes.set(49, 11);
    snakes.set(56, 53);
    snakes.set(62, 19);
    snakes.set(64, 60);
    snakes.set(87, 24);
    snakes.set(93, 73);
    snakes.set(95, 75);
    snakes.set(98, 78);
  
    const ladders = new Map<number, number>();
    ladders.set(1, 38);
    ladders.set(4, 14);
    ladders.set(9, 31);
    ladders.set(21, 42);
    ladders.set(28, 84);
    ladders.set(36, 44);
    ladders.set(51, 67);
    ladders.set(71, 91);
    ladders.set(80, 100);

    expect(leastNumTurns(snakes, ladders)).to.equal(8)
  })
})
