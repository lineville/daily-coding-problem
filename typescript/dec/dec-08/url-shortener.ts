// * Daily Coding Problem Dec 8th 2019

// * [Easy] -- Microsoft

/**
 * * Create a url shortener that accepts a url as input and shortens
 * * it to a 6 char alpha numeric string. Given the shortened url it should
 * * restore the same original url each time
 */

class URLShortener {
  storedURLs: Object

  constructor() {
    this.storedURLs = {}
  }

  // * Creates a random alphanumeric string of size (will contain numbers, lowercase, and uppercase at same prob)
  generateRandomAlphaNum = (size: number): string => {
    let result: string = ''
    const options: string =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i: number = 0; i < size; i++) {
      let randIndex: number = Math.floor(
        Math.random() * Math.floor(options.length)
      )
      result += options[randIndex]
    }

    return result
  }

  // * Shortens the given url, stores it in our object of shortened urls
  // * If we have already shortened it just return what we generated before
  shorten = (url: string): string => {
    if (Object.values(this.storedURLs).includes(url)) {
      return this.storedURLs[this.shorten(url)]
    }
    let result: string = this.generateRandomAlphaNum(6)
    this.storedURLs[result] = url
    return result
  }

  // * Returns the original url given the shortened version
  restore = (shortURL: string): string => {
    let result: string = this.storedURLs[shortURL]
      ? this.storedURLs[shortURL]
      : null

    return result
  }
}

const testURLShortener = (): void => {
  let shortener: URLShortener = new URLShortener()
  let input: string = 'https://github.com/lineville'
  let result: string = shortener.shorten(input)

  console.log(result)
  let restored: string = shortener.restore(result)

  console.log(input === restored ? 'Passed' : 'Failed')

  let micro: string = shortener.shorten('https://github.com/Microsoft')
  console.log(micro)
  console.log(shortener.restore(micro))
}

testURLShortener()
