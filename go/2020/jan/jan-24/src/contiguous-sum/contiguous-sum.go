package contiguousSum
// * Daily Coding Problem Jan 24 2020

// * [Medium] -- Lyft

// * Given an array of integers, and a number K, return the contiguous chunk
// * of the array that sums up to the number K. Return null if none is possible.package sum

// ! Ex: [1, 2, 3, 4, 5] , K = 9 -> [2, 3, 4]

// * Returns a contiguous slice of the input numbers that sums up to k. Or nil if not possible
func ContiguousSum(nums []int, k int) []int {
	lower := 0
	upper := 1

	chunk := nums[lower:upper]
	currentSum := arraySum(chunk)

	for currentSum != k {
		// * Sum was too small, increase upper bound
		if (currentSum < k) {
			upper++
		}
		
		// * Sum was too big, increase lower bound
		if (currentSum > k) {
			lower++
		}
		
		// * Upper bound reached end of array, no sum was possible
		if upper > len(nums) {
			return nil
		}
		// * Update the current sum based on the updated bounds and keep looping
		chunk = nums[lower:upper]
		currentSum = arraySum(chunk)
	}

	return chunk
}

// * Returns the sum of an array of integers
func arraySum(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum = sum + num
	}
	return sum
}

// * Checks if two arrays are deeply equal
func arrayEqual(a []int, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if v != b[i] {
			return false
		}
	}
	return true
}