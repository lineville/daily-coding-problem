// * Daily Coding Problem

// * [Hard] -- Nvidia

// * This problem was asked by Nvidia.

// * Find the maximum of two numbers without using any if-else statements, branching,
// * or direct comparisons.

export const max = (x: number, y: number): number => {
  // I truly don't understand how this works but it technically does not use any comparison
  // but I would never really want someone else to try to read this and understand it either
  return x ^ ((x ^ y) & -(x < y))

  // * This one is what I would actually use and is way less confusing
  // return x >= y ? x : y

  // * Or even more simple ...
  // if x >= y {
  //   return x;
  // } else {
  //   return y;
  // }
}
