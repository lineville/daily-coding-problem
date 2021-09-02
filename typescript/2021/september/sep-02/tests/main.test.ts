import { expect } from 'chai'
import { addSubtract } from '../src/main'

// Caveat: addSubtract must be called using +addSubtract to force cast at the end
describe('Add Subtract', () => {
    it('Should alternatively subtract and add the curried argument', () => {
        expect(+addSubtract(7)).to.equal(7)
    })
    it('Should alternatively subtract and add the curried argument', () => {
        expect(+addSubtract(1)(2)(3)).to.equal(0)
    })
    it('Should alternatively subtract and add the curried argument', () => {
        expect(+addSubtract(-5)(3)(9)).to.equal(-11)
    })
})
