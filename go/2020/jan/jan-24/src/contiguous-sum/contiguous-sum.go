package contiguousSum
// * Daily Coding Problem Jan 24 2020

// * [Medium] -- Lyft

// * Given an array of integers, and a number K, return the contiguous chunk
// * of the array that sums up to the number K. Return null if none is possible.package sum

// ! Ex: [1, 2, 3, 4, 5] , K = 9 -> [2, 3, 4]


func ContiguousSum(nums []int, k int) []int {
	lower := 0
	upper := 1

	chunk := nums[lower:upper]
	currentSum := arraySum(chunk)

	for currentSum != k {
		
		if (currentSum < k) {
			upper++
		}
		
		if (currentSum > k) {
			lower++
		}
		
		if upper > len(nums) {
			return nil
		}
		chunk = nums[lower:upper]
		currentSum = arraySum(chunk)
	}

	return chunk
}

func arraySum(nums []int) int {
	sum := 0
	for _, num := range nums {
		sum = sum + num
	}
	return sum
}


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