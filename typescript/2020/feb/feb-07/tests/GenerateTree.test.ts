import { expect } from 'chai';
import generate from '../src/GenerateTree'

describe('Generate tree', function() {
  it('generates arbitrary tree 1', function() {
    const result = generate(1);
    console.log(result);
    expect(result).to.not.be.null;
  });

  it('generates arbitrary tree 2', function() {
    const result = generate(2);
    console.log(result);
    expect(result).to.not.be.null;
  });

  it('generates arbitrary tree 3', function() {
    const result = generate(3);
    console.log(result);
    expect(result).to.not.be.null;
  });
});
