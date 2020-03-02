// * Daily Coding Problem March 2nd 2020

// * [Medium] -- Facebook

// ********************************

// * Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice,
// * find the two elements that appear only once.

// ! Ex:  [2, 4, 6, 8, 10, 2, 6, 10], return [4, 8]. The order does not matter.

// * Constraints : Space: O(1), Time: O(N)
// * Constant space means we can use a few extra variables but they must be fixed and not proportional to the input

// * Since we cant use some other object to keep track of the occurrences of what we've seen we have to somehow leverage the fact that
// * all other numbers occur twice except for the two unique ones we are searching for. Using XOR we can do this.

// * Start by XORing all the numbers together which will cancel out all the repeating ones and leave us with the value of the
// * two one-occurence numbers. The weird part is then seperating out this number into the two seperate pieces. We find 
// * right most set bit with a strange bitwise hack and then we go over the numbers again this time XORing each number onto
// * one of the numbers we are creating. If the rightmost set bit XOR produces 0 then we do it do unique1 and otherwise unique2.

export default function findTwoUniques(nums: Array<number>): Array<number> {
  let xOrResult: number = nums[0];
  let unique1: number = 0;
  let unique2: number = 0;
  
  for (let i = 1; i < nums.length; i++) {
    xOrResult = xOrResult ^ nums[i];
  }

  let rightMostSetBit: number = xOrResult & ~(xOrResult - 1);


  for (let i = 0; i < nums.length; i++) {
    let value: number = nums[i];
    if ((value & rightMostSetBit) != 0) {
      unique1 = unique1 ^ value;
    } else {
      unique2 = unique2 ^ value;
    }
  }
  return [unique1, unique2];
}
