import { expect } from 'chai';
import Basic from '../src/BasicTest';

describe('Basic', function() {
  it('Hello', function() {
    let result = Basic.Hello('Liam');
    expect(result).equal('Hi Liam');
  });

});
