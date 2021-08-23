import { expect } from 'chai'
import { maxWeight, maxWeightHelperIter, maxWeightHelperRec } from '../src/main'

describe('maxWeight', () => {
    it('Recursive: should return max weight of paths through triangle', () => {
        const triangle = [[1], [2, 3], [1, 5, 1]]
        expect(maxWeight(triangle, maxWeightHelperRec)).to.equal(9)
    })

    it('Iterative: should return max weight of paths through triangle', () => {
        const triangle = [[1], [2, 3], [1, 5, 1]]
        expect(maxWeight(triangle, maxWeightHelperIter)).to.equal(9)
    })
})
