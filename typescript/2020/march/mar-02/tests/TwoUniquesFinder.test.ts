import { expect } from 'chai';
import findTwoUniques from '../src/TwoUniquesFinder'

describe('findTwoUniques', function() {
  it('[2, 4, 6, 8, 10, 2, 6, 10]', function() {
    const result : Array<number> = findTwoUniques([2, 4, 6, 8, 10, 2, 6, 10]);
    expect(result).to.deep.equal([4, 8]);
  });

  it('[4, 5, 4, 5, 3, 2, 9, 3, 9, 8]', function() {
    const result : Array<number> = findTwoUniques([4, 5, 4, 5, 3, 2, 9, 3, 9, 8]);
    expect(result).to.deep.equal([2, 8]);
  });


});
