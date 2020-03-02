import { expect } from 'chai';
import Basic from '../src/Basic';

describe('Basic', function() {
  xit('Hello', function() {
    let result = Basic.Hello('Liam');
    expect(result).equal('Hi Liam');
  });

});
