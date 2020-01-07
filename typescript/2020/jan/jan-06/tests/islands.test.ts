import { expect } from 'chai';
import {numberOfIslands} from '../src/islands';

describe('Island Counter', function() {
  it('numberOfIslands', function() {
    const input: Array<Array<number>> = [
        [1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 1, 0, 0, 1],
        [1, 1, 0, 0, 1]
      ];
    const result : number = numberOfIslands(input);
    expect(result).equal(4);
  });

});