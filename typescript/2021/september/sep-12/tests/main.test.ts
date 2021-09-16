import { expect } from 'chai'
import { autoCompleteOptionsSimple, autoCompleteOptionsOptimized } from '../src/main'

describe('Auto Complete Options Simple', () => {
    it('should return autocomplete options v1', () => {
        expect(
            autoCompleteOptionsSimple('de', ['dog', 'deer', 'deal'])
        ).to.deep.equal(['deer', 'deal'])
    })

    it('should return autocomplete options v2', () => {
        expect(
            autoCompleteOptionsOptimized('de', ['dog', 'deer', 'deal'])
        ).to.deep.equal(['deer', 'deal'])
    })
})
