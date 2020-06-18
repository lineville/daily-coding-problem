// * Daily Coding Problem

// * [Hard] -- Nvidia

// * This problem was asked by Nvidia.

// * Find the maximum of two numbers without using any if-else statements, branching,
// * or direct comparisons.

export const max = (x: number, y: number): number => {
  return x ^ ((x ^ y) & -(x < y))
}

// ! This does use direct comparison and would be preferable in most cases for readability.
export const maxSimple = (x: number, y: number): number => {
  return x >= y ? x : y
}
