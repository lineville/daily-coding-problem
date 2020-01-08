import { expect, assert } from 'chai';
import {numParensToRemove} from '../src/SymbolMatcher';

describe('SymbolMatcher', function() {
  it('numParensToRemove ()())()', function() {
    let result = numParensToRemove('()())()')
    expect(result).equal(1);
  });

  it('numParensToRemove )(', function() {
    let result = numParensToRemove(')(')
    expect(result).equal(2);
  });

  it('numParensToRemove ((()())())', function() {
    let result = numParensToRemove('((()())())')
    expect(result).equal(0);
  });

  it('numParensToRemove )))()', function() {
    let result = numParensToRemove(')))()')
    expect(result).equal(3);
  });

  it('numParensToRemove ((()(bad', function() {
    assert.throw(() => numParensToRemove('bad'), "Not a paren!");
  });

});