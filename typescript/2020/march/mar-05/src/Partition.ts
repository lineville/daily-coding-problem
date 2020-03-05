// * Daily Coding Problem March 5th 2020

// * [Medium] -- Amazon

// * Given a pivot x, and a list lst, partition the list into three parts.

// * The first part contains all elements in lst that are less than x
// * The second part contains all elements in lst that are equal to x
// * The third part contains all elements in lst that are larger than x
// * Ordering within a part can be arbitrary.

// ! Ex: given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14]

// * Time: O(N), Space: O(N) -- If we want to do this in O(1) space meaning we shift array values in place,
// * we need a slightly more complex implementation of this. Using more space may prevent this from operating in linear time.
export const partition = (pivot : number, lst : Array<number>) : Array<number> => {
  let lowerThanPivot : Array<number> = [];
  let equalToPivot : Array<number> = [];
  let greaterThanPivot : Array<number> = [];

  lst.forEach((num : number) => {
    if (num < pivot) {
      lowerThanPivot.push(num);
    }

    if (num === pivot) {
      equalToPivot.push(num);
    }

    if (num > pivot) {
      greaterThanPivot.push(num);
    }
  })


  return [...lowerThanPivot, ...equalToPivot, ...greaterThanPivot]
}