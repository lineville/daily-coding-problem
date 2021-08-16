import { expect } from 'chai'
import URLShortener from '../src/main'

describe('URLShortener', () => {
  it('should create unique shorter URLs', () => {
    const urlShortener = new URLShortener(6) // short URLS are 6 characters long
    const result1 = urlShortener.shorten('http://liamneville.me')
    const result2 = urlShortener.shorten('http://lindali.me')
    expect(result1).to.not.equal(result2)
  })

  it('should restore shortened url to original', () => {
    const urlShortener = new URLShortener(6) // short URLS are 6 characters long
    const original = 'http://liamneville.me'
    const shortened = urlShortener.shorten(original)
    expect(original).to.equal(urlShortener.restore(shortened))
  })

  it('should provide the same shortened URL when called more than once', () => {
    const urlShortener = new URLShortener(6) // short URLS are 6 characters long
    const original = 'http://liamneville.me'
    const shortened = urlShortener.shorten(original)
    const shortened2 = urlShortener.shorten(original)
    expect(shortened).to.equal(shortened2)
  })
})
