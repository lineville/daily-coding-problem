import { expect } from 'chai';
import isBalanced from '../src/BalancedExpression'

describe('Balanced Expression', () => {
  
  it('isBalanced (()* ', () => {
    const result : boolean = isBalanced("(()*");
    expect(result).to.be.true;
  });

  it('isBalanced (*) ', () => {
    const result : boolean = isBalanced("(*)");
    expect(result).to.be.true;
  });

  it('isBalanced )*( ', () => {
    const result : boolean = isBalanced(")*(");
    expect(result).to.be.false;
  });

});
