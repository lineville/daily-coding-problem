import { expect } from 'chai'
import { LinkedListNode, swapEveryOtherNode } from '../src/main'

describe('Swap every other node', () => {
    it('should swap every other node', () => {
        const head = new LinkedListNode(1)
        const n2 = head.append(2)
        const n3 = n2.append(3)
        const n4 = n3.append(4)
        const n5 = n4.append(5)
        const result = swapEveryOtherNode(head)

        const expectedHead = new LinkedListNode(2)
        const en2 = expectedHead.append(1)
        const en3 = en2.append(4)
        const en4 = en3.append(3)
        const en5 = en4.append(5)

        expect(result).to.deep.equal(expectedHead)
    })

    it('should swap every other node', () => {
        const head = new LinkedListNode(1)
        const n2 = head.append(2)
        const n3 = n2.append(3)
        const n4 = n3.append(4)
        const n5 = n4.append(5)
        const n6 = n5.append(6)
        const result = swapEveryOtherNode(head)

        const expectedHead = new LinkedListNode(2)
        const en2 = expectedHead.append(1)
        const en3 = en2.append(4)
        const en4 = en3.append(3)
        const en5 = en4.append(6)
        const en6 = en5.append(5)

        expect(result).to.deep.equal(expectedHead)
    })

    it('should swap every other node', () => {
        const head = new LinkedListNode(1)
        const result = swapEveryOtherNode(head)

        const expectedHead = new LinkedListNode(1)

        expect(result).to.deep.equal(expectedHead)
    })
})
