// Liam Neville
// Daily Coding Problem Oct 18 2019

// Given an array of integers (nums) find the first missing positive integer
// AKA: Find the lowest positive integer that does not exist in the array.

const testAll = (): void => {
    const input1: Array<number> = [3, 4, -1, 1]
    const expectedOutput1: number = 2
    console.log(testLowestPositive(input1, expectedOutput1) ? "Test Passed [ " + input1 + " ] => "  + expectedOutput1 : "Test Failed")
    

    const input2: Array<number> = [1, 2, 0]
    const expectedOutput2: number = 3
    console.log(testLowestPositive(input2, expectedOutput2) ? "Test Passed [ " + input2 + " ] => "  + expectedOutput2 : "Test Failed")


    const input3: Array<number> = [5, 7, -9, 2, 1]
    const expectedOutput3: number = 3
    console.log(testLowestPositive(input3, expectedOutput3) ? "Test Passed [ " + input3 + " ] => "  + expectedOutput3 : "Test Failed")
}

const testLowestPositive = (nums: Array<number>, expectedResult: number): boolean => {
    const result: number = lowestPositive(nums)
    const passed: boolean = result === expectedResult
    return passed
}



const lowestPositive = (nums: Array<number>): number => {
    const positivesSorted: Array<number> = nums.filter((n: number) => n > 0).sort((a: number, b: number) => a - b)

    for (let i = 0; i < positivesSorted.length; i++) {
        if (positivesSorted[i] !== i + 1) return i + 1
    }
    return positivesSorted.length + 1
}

testAll()