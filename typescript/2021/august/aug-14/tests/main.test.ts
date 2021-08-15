import { expect } from 'chai'
import HitCounter from '../src/main'

describe('HitCounter', () => {
  it('counts hits in timespans', () => {
    let counter = new HitCounter();
    counter.record(1);
    counter.record(5);
    counter.record(10);
    counter.record(15);
    counter.record(20);
    expect(counter.total()).to.equal(5);
    expect(counter.range(4, 17)).to.equal(3);
  })
})
