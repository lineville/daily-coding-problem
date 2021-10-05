import { expect } from 'chai'
import { DoublyLinkedList, isPalindrome } from '../src/main'

describe('is linked list palindrome', () => {
    it('should be a palindrome', () => {
        const list = new DoublyLinkedList<number>()
        list.append(1)
        list.append(4)
        list.append(3)
        list.append(4)
        list.append(1)
        expect(isPalindrome(list)).to.be.true
    })

    it('should not be a palindrome', () => {
        const list = new DoublyLinkedList<number>()
        list.append(1)
        list.append(4)
        list.append(3)
        list.append(6)
        list.append(4)
        list.append(1)
        expect(isPalindrome(list)).to.be.false
    })

    it('should not be a palindrome', () => {
        const list = new DoublyLinkedList<number>()
        expect(isPalindrome(list)).to.be.true
    })
    it('should not be a palindrome', () => {
        const list = new DoublyLinkedList<number>()
        list.append(1)
        expect(isPalindrome(list)).to.be.true
    })
})
