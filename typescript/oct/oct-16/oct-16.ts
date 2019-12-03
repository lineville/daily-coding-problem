// Liam Neville
// Daily Coding Problem Oct 16 2019
// Given an array of integers, return a new array such that each element at index i 
// of the new array is the product of all the numbers in the original array except the one at i.

const main = (): void => {
    const input: Array<number> = [3, 2, 1]
    const expectedOutput: Array<number> = [2, 3, 6]

    let result = arrayProductNoDivision(input)
    let passed = result.toString() === expectedOutput.toString()
    console.log("Passed ? " + passed)

    result = arrayProductDivision(input)
    passed = result.toString() === expectedOutput.toString()
    console.log("Passed ? " + passed)

}

const arrayProductNoDivision = (nums: Array<number>): Array<number> => {
    const result = new Array<number>()
    nums.forEach((num: number) => {
        const allOthers: Array<number> = nums.filter(n => n != num)
        const product: number = allOthers.reduce((prev: number, acc: number) => prev * acc, 1)
        result.push(product)
    });
    return result
}

const arrayProductDivision = (nums: Array<number>): Array<number> => {
    const result = new Array<number>()
    const totalProduct: number = nums.reduce((prev: number, acc: number) => prev * acc, 1)
    nums.forEach((num: number) => {
        const val: number = totalProduct / num
        result.push(val)
    })
    return result
}

main()