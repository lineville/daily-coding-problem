import { expect } from 'chai'
import { isValidAndroidPassword } from '../src/main'

describe('Android swipe password validator', () => {
    it('should be valid', () => {
        expect(isValidAndroidPassword([4, 2, 1, 7])).to.be.true
    })
    it('should be invalid', () => {
        expect(isValidAndroidPassword([2, 1, 7])).to.be.false
    })
})
