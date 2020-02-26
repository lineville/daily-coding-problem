import { expect } from 'chai';
import maxProfit, {initializeGrid} from '../src/ProfitOptimizer'

describe('Profit Optimizer', function() {
  it('Prices: [10, 22, 5, 75, 65, 80], k = 2', function() {
    const result : number = maxProfit([10, 22, 5, 75, 65, 80], 2);
    expect(result).to.equal(87)
  });

  it('Prices: [5, 2, 4, 0, 1], k = 2', function() {
    const result : number = maxProfit([5, 2, 4, 0, 1], 2);
    expect(result).to.equal(3)
  });

  it('Zeroes grid 3 x 5', function() {
    const result : Array<Array<number>> = initializeGrid(3, 5, 0);
    expect(result).to.not.be.null;
  })

});
