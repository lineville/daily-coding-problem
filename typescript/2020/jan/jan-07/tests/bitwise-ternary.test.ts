import { expect } from 'chai';
import {bitwiseTernary} from '../src/bitwise-ternary';

describe('Bitwise Ternary', function() {
  it('When B is 1 it should return X = 10', function() {
    const result : number = bitwiseTernary([10, 20, 1])
    expect(result).equal(10);
  });

  it('When B is 0 it should return Y = 20', function() {
    const result : number = bitwiseTernary([10, 20, 0])
    expect(result).equal(20);
  });

});
