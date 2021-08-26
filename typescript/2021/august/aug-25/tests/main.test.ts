import { expect } from 'chai'
import { longestTwoAppleStretch } from '../src/main'

describe('Longest Two Apple Stretch', () => {
    it('Should find the longest stretch of only two types of apples', () => {
        const apples = [2, 1, 2, 3, 3, 1, 3, 5]
        expect(longestTwoAppleStretch(apples)).to.equal(4)
    })
})
