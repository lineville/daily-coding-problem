import { expect } from 'chai'
import { isNumber } from '../src/main'

describe('Is Number', () => {
    it('checks if a string is a number', () => {
        expect(isNumber('10')).to.be.true
    })
    it('checks if a string is a number', () => {
        expect(isNumber('-10')).to.be.true
    })
    it('checks if a string is a number', () => {
        expect(isNumber('10.1')).to.be.true
    })
    it('checks if a string is a number', () => {
        expect(isNumber('-10.1')).to.be.true
    })
    it('checks if a string is a number', () => {
        expect(isNumber('1e5')).to.be.true
    })
    it('checks if a string is a number', () => {
        expect(isNumber('a')).to.be.false
    })
    it('checks if a string is a number', () => {
        expect(isNumber('x 1')).to.be.false
    })
    it('checks if a string is a number', () => {
        expect(isNumber('a -2')).to.be.false
    })
    it('checks if a string is a number', () => {
        expect(isNumber('-')).to.be.false
    })
})
