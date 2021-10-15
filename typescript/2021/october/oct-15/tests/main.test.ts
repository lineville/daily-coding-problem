import { expect } from 'chai'
import { longestMouseMove } from '../src/main'

describe('Should return the longest move of a mouse to its hole', () => {
    it('Should be 6', () => {
        expect(longestMouseMove([1, 4, 9, 15], [10, -5, 0, 16])).to.equal(6)
    })

    it('Should be 100', () => {
        expect(longestMouseMove([1], [101])).to.equal(100)
    })
})
