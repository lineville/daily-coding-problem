// * Daily Coding Problem June 14th 2020

// * [Easy] -- Square

// * The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller
// * than N. The method is to take increasingly larger prime numbers, and mark their
// * multiples as composite.

// ! Ex: to find all primes less than 100, we would first mark [4, 6, 8, ...]
// ! (multiples of two), then [6, 9, 12, ...] (multiples of three), and so on.
// ! Once we have done this for all primes less than N, the unmarked numbers that remain will be prime.

// * Implement this algorithm.

// * Bonus: Create a generator that produces primes indefinitely (that is, without taking N as an input).

export const allPrimesLessThanN = (n: number): Array<number> => {
  let result = new Array<number>()
  let marked = new Map<number, boolean>()

  for (let i = 2; i < n; i++) {
    marked.set(i, false)
  }

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      marked = markMultiplesOfN(i, marked)
    }
  }

  for (const [num, mark] of marked.entries()) {
    if (!mark) {
      result.push(num)
    }
  }
  return result
}

export const isPrime = (num: number): boolean => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

export const markMultiplesOfN = (
  n: number,
  marked: Map<number, boolean>
): Map<number, boolean> => {
  for (const mult of marked.keys()) {
    if (mult !== n && mult % n === 0) {
      marked.set(mult, true)
    }
  }
  return marked
}

console.log(allPrimesLessThanN(20))
