import { expect } from 'chai';
import isKPalindrome from '../src/IsKPalindroms';

describe('Is K Palindrome', function() {
  it('word: abcdecba, k : 1', function() {
    const result : boolean = isKPalindrome("abcdecba", 1);
    expect(result).to.be.true;
  });


  it('word: abcdeca, k : 2', function() {
    const result : boolean = isKPalindrome("abcdeca", 2);
    expect(result).to.be.true;
  });


  it('word: acdcb, k : 1', function() {
    const result : boolean = isKPalindrome("acdcb", 1);
    expect(result).to.be.false;
  });


  it('word: waterrfetawx, k : 2', function() {
    const result : boolean = isKPalindrome("waterrfetawx", 2);
    expect(result).to.be.true;
  });

  it('word: waterrfetawx, k : 1', function() {
    const result : boolean = isKPalindrome("waterrfetawx", 1);
    expect(result).to.be.false;
  });


});
