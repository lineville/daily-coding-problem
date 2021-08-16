// * Daily Coding Problem August 16 2021

// * [Easy] -- Microsoft

// Implement a URL shortener with the following methods:

// shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
// restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
// Hint: What if we enter the same URL twice?

export default class URLShortener {
  
  private shortToURLMap = new Map<string, string>() // Maps short -> original URL
  private urlToShortMap = new Map<string, string>() // Maps URL -> short version
  private shortURLSize: number // Size of the shortened URL

  constructor(shortURLSize: number) {
    this.shortToURLMap = new Map<string, string>()
    this.urlToShortMap = new Map<string, string>()
    this.shortURLSize = shortURLSize
  }

  // Shorts the url into a short url and returns the shorter version
  shorten(url: string): string {
    const short = this.urlToShortMap.get(url)

    if (short) {
      return short
    }

    const shortUrl = this.generateShortUrl()
    this.urlToShortMap.set(url, shortUrl)
    this.shortToURLMap.set(shortUrl, url)

    return shortUrl
  }

  // Restores the shortened URL to the original url (or null if this was never shortened)
  restore(short: string): string | null {
    return this.shortToURLMap.get(short) || null
  }

  // Generates a random short URL of length shortURLSize
  private generateShortUrl(): string {
    return Math.random().toString(36).substr(2, this.shortURLSize)
  }
}
