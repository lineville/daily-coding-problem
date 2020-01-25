import { longestNumStreak } from './../src/LongestNumberStreak';
import { expect } from 'chai';

describe('Longest Number Streak', function() {
  it('[100, 4, 200, 1, 3, 2]', function() {
    let result : number = longestNumStreak([100, 4, 200, 1, 3, 2])
    expect(result).to.equal(4)
  });

  it('[]', function() {
    let result : number = longestNumStreak([])
    expect(result).to.equal(0)
  });

  it('[7, 9, 2]', function() {
    let result : number = longestNumStreak([7, 9, 2])
    expect(result).to.equal(1)
  });

});
