import { expect } from 'chai'
import { LFUCache } from '../src/main'

describe('LFU Cache', () => {
  it('Should store items in cache and evict LFU when full', () => {
    let cache = new LFUCache<number>();
    cache.set(1, 1);
    cache.set(2, 2);
    cache.set(3, 3);
    cache.set(4, 4);
    cache.get(1);
    cache.get(1)
    cache.get(1)
    cache.get(2);
    cache.get(2)
    cache.get(3)
    cache.get(3)
    cache.get(3)
    cache.get(4)

    const res = cache.getLFUItem();
    expect(res).to.equal(4)
  })
})
