import { expect } from 'chai'
import { isValidUTF8 } from '../src/main'

describe('Check if numbers are valid UTF8', () => {
    it('1 byte valid', () => {
        const nums = [parseInt('00001010', 2)]
        expect(isValidUTF8(nums)).to.be.true
    })
    it('1 byte invalid', () => {
        const nums = [parseInt('10001010', 2)]
        expect(isValidUTF8(nums)).to.be.false
    })

    it('2 byte valid', () => {
        const nums = [parseInt('11001010', 2), parseInt('10010101', 2)]
        expect(isValidUTF8(nums)).to.be.true
    })

    it('2 byte valid', () => {
        const nums = [parseInt('11001010', 2), parseInt('10010101', 2)]
        expect(isValidUTF8(nums)).to.be.true
    })

    it('3 byte valid', () => {
        const nums = [
            parseInt('11101010', 2),
            parseInt('10001010', 2),
            parseInt('10010101', 2),
        ]
        expect(isValidUTF8(nums)).to.be.true
    })

    it('3 byte invalid', () => {
        const nums = [
            parseInt('10101010', 2),
            parseInt('10001010', 2),
            parseInt('10010101', 2),
        ]
        expect(isValidUTF8(nums)).to.be.false
    })

    it('4 byte valid', () => {
        const nums = [
            parseInt('11110010', 2),
            parseInt('10101010', 2),
            parseInt('10001010', 2),
            parseInt('10010101', 2),
        ]
        expect(isValidUTF8(nums)).to.be.true
    })

    it('4 byte invalid', () => {
        const nums = [
            parseInt('11111010', 2),
            parseInt('10101010', 2),
            parseInt('10001010', 2),
            parseInt('11010101', 2),
        ]
        expect(isValidUTF8(nums)).to.be.false
    })
})
