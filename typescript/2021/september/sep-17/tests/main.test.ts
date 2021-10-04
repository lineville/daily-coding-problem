import { expect } from 'chai'
import { LRUCache } from '../src/main'

describe('LRU Cache', () => {
    it('Work like a cache, ejecting the least recently used item when used', () => {
        let cache = new LRUCache(5)
        cache.set('a', 'apple')
        cache.set('b', 'banana')
        cache.set('c', 'cow')
        cache.set('d', 'dog')
        cache.set('e', 'elephant')
        cache.get('b')
        cache.get('a')
        cache.get('c')
        cache.get('d')
        cache.get('e')
        cache.set('f', 'flower')
        expect(cache.get('b')).to.be.null;
    })
})
