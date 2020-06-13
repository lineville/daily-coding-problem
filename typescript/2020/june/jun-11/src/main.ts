// * Daily Coding Problem June 11th 2020

// * [Easy] -- Palantir

// ****************************************************************

// * In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

// * A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula,
// * the maximum is chosen.

// ! Ex:  suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5].
// * Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

// * Given a list of paper citations of a researcher, calculate their h-index.

// * O(N) solution
export const calculateHIndexBetter = (citations: Array<number>): number => {
  // * Trivial case (this should not happen usually)
  if (citations.length < 0) {
    return 0
  }

  // * Base Case
  if (citations.length === 1) {
    return citations[0] > 0 ? citations.length : 0
  }

  let result = 1
  for (const [c, idx] of citations.entries()) {
    if (c >= idx + 1) {
      result++
    }
  }
  return result
}

// * O(N^2) since this loop is O(N) and calls hasIndex which is O(N) itself
export const calculateHIndex = (citations: Array<number>): number => {
  let hIndex = citations.length
  while (hIndex > 0) {
    if (hasHIndex(hIndex, citations)) {
      return hIndex
    }
    hIndex--
  }

  return hIndex
}

// * O(N)
const hasHIndex = (hIndex: number, citations: Array<number>): boolean => {
  let citationsWithAtleastH = 0

  for (const c of citations) {
    if (c >= hIndex) {
      citationsWithAtleastH++
    }
  }

  return citationsWithAtleastH >= hIndex
}
