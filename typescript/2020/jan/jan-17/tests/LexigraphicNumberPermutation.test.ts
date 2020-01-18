import { expect } from 'chai';
import { nextGreatesPermuation } from '../src/LexigraphicNumberPermutation';

describe('Lexigraphic Number Permutations', function() {
  it('[2, 1, 8, 7, 6, 5]', function() {
    let result : Array<number> = nextGreatesPermuation([2, 1, 8, 7, 6, 5])
    expect(result).deep.equal([2, 5, 1, 6, 7, 8])
  });

  it('[1, 2, 3, 4]', function() {
    let result : Array<number> = nextGreatesPermuation([1, 2, 3, 4])
    expect(result).deep.equal([1, 2, 4, 3])
  });

  it('[5, 3, 4, 9, 7, 6]', function() {
    let result : Array<number> = nextGreatesPermuation([5, 3, 4, 9, 7, 6])
    expect(result).deep.equal([5, 3, 6, 4, 7, 9])
  });

  it('[4, 3, 2, 1]', function() {
    let result : Array<number> = nextGreatesPermuation([4, 3, 2, 1])
    expect(result).deep.equal([1, 2, 3, 4])
  });

});
