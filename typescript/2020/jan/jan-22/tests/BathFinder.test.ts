import { minimumSteps } from './../src/PathFinder';
import { expect } from 'chai';

describe('Path Finder', function() {
  it('minimum steps: [(0, 0), (1, 1), (1, 2)]', function() {
      let result : number = minimumSteps([
          { x: 0, y: 0},
          { x: 1, y: 1},
          { x: 1, y: 2}
      ])
    expect(result).equal(2);
  });

  it('minimum steps: [(0, 0)]', function() {
    let result : number = minimumSteps([
        { x: 0, y: 0}
    ])
  expect(result).equal(0);
});

it('minimum steps: [(0, 0), (1, 1), (1, 2), (1, 5)]', function() {
    let result : number = minimumSteps([
        { x: 0, y: 0},
        { x: 1, y: 1},
        { x: 1, y: 2},
        { x: 1, y: 5}
    ])
  expect(result).equal(5);
});

});
