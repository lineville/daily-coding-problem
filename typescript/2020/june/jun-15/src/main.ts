// * Daily Coding Problem June 15th 2020

export const minJumps = (elements: Array<number>): number => {
  function minJumpsRecursive(
    elements: Array<number>,
    start: number,
    end: number
  ): number {
    if (start === end) {
      return 0
    }

    if (elements[start] === 0) {
      return Number.POSITIVE_INFINITY
    }

    let min = Number.POSITIVE_INFINITY
    for (let i = start + 1; i <= end && i <= start + elements[start]; i++) {
      let jumps = minJumpsRecursive(elements, i, end)
      if (jumps !== Number.POSITIVE_INFINITY && jumps + 1 < min) {
        min = jumps + 1
      }
    }
    return min
  }

  return minJumpsRecursive(elements, 0, elements.length - 1)
}
