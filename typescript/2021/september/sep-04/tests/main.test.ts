import { expect } from 'chai'
import { reduce } from '../src/main'

describe('Reducer', () => {
    it('reduces the list using combining function', () => {
        expect(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0)).to.equal(15)
    })
    it('reduces the list using combining function', () => {
        expect(reduce(['Hello', 'there', 'my', 'friend'], (a, b) => a + ' ' + b, '')).to.equal(' Hello there my friend')
    })
})
