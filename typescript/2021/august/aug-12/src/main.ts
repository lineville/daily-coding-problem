// * Daily Coding Problem August 12 2021

// * [Hard] -- Netflix

// Given a sorted list of integers of length N, determine if an element x is in the list
// without performing any multiplication, division, or bit-shift operations.

// Constraint: Time Complexity: O(log N)

// Uses Binary search to find if element is in list
export const exists = (nums: number[], x: number): boolean => {
  // Base Case: Could not find element
  if (!nums.length) {
    return false
  }

  let currentIndex = Math.floor(nums.length / 2) // Start in middle of nums

  // Found the element
  if (nums[currentIndex] === x) {
    return true
  } else if (nums[currentIndex] > x) {
    // Recursively search the left half of the list
    return exists(nums.slice(0, currentIndex), x)
  } else {
    // Recursively search the right half of the list
    return exists(nums.slice(currentIndex + 1), x)
  }
}
