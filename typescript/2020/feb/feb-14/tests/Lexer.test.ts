import { expect } from 'chai';
import isValidNumber from '../src/Lexer'

describe('Number Validator', function() {
  it('is valid: 10', function() {
    const result : boolean = isValidNumber("10");
    expect(result).to.be.true;
  });

  it('is valid: -10', function() {
    const result : boolean = isValidNumber("-10");
    expect(result).to.be.true;
  });

  it('is valid: 10.1', function() {
    const result : boolean = isValidNumber("10.1");
    expect(result).to.be.true;
  });

  it('is valid: -10.1', function() {
    const result : boolean = isValidNumber("-10.1");
    expect(result).to.be.true;
  });

  it('is valid: 1E5', function() {
    const result : boolean = isValidNumber("1E5");
    expect(result).to.be.true;
  });

  it('is valid: 1E-5', function() {
    const result : boolean = isValidNumber("1E-5");
    expect(result).to.be.true;
  });

  it('is valid: a', function() {
    const result : boolean = isValidNumber("a");
    expect(result).to.be.false;
  });

  it('is valid: x 1', function() {
    const result : boolean = isValidNumber("x 1");
    expect(result).to.be.false;
  });

  it('is valid: a -2', function() {
    const result : boolean = isValidNumber("a -2");
    expect(result).to.be.false;
  });

  it('is valid: -', function() {
    const result : boolean = isValidNumber("-");
    expect(result).to.be.false;
  });

});
