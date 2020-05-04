import { expect } from 'chai'
import { isPalindrome } from '../src/NumPalindrome'

describe('Num Palindrome', () => {
  it('should return true', () => {
    const result = isPalindrome(121)
    expect(result).to.be.true
  })

  it('should return true', () => {
    const result = isPalindrome(888)
    expect(result).to.be.true
  })

  it('should return false', () => {
    const result = isPalindrome(678)
    expect(result).to.be.false
  })

  it('should return true', () => {
    const result = isPalindrome(1441)
    expect(result).to.be.true
  })

  it('should return true', () => {
    const result = isPalindrome(13531)
    expect(result).to.be.true
  })

  it('should return true', () => {
    const result = isPalindrome(1113335333111)
    expect(result).to.be.true
  })

  it('should return false', () => {
    const result = isPalindrome(12344)
    expect(result).to.be.false
  })
})
