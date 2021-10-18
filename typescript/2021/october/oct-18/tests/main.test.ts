import { expect } from 'chai'
import { findTeams } from '../src/main'

describe('Should split the kids into teams if possible', () => {
    it('should be able to split', () => {
        const kids = new Map<number, number[]>()
        kids.set(0, [3])
        kids.set(1, [2])
        kids.set(2, [1, 4])
        kids.set(3, [0, 4, 5])
        kids.set(4, [2, 3])
        kids.set(5, [3])
        expect(findTeams(kids)).to.deep.equal([
            new Set([0, 1, 4, 5]),
            new Set([2, 3]),
        ])
    })

    it('should NOT be able to split', () => {
        const kids = new Map<number, number[]>()
        kids.set(0, [3])
        kids.set(1, [2])
        kids.set(2, [1, 3, 4])
        kids.set(3, [0, 2, 4, 5])
        kids.set(4, [2, 3])
        kids.set(5, [3])
        expect(findTeams(kids)).to.be.false
    })
})
