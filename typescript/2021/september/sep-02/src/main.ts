// * Daily Coding Problem September 2nd 2021

// * [Medium] -- Squarespace

// Write a function, add_subtract, which alternately adds and subtracts curried arguments.
//  Here are some sample operations:

// add_subtract(7) -> 7

// add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

// add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11

// Alternatively adds and subtracts curried arguments
export const addSubtract = (num: number) => {
    const nums = new Array<number>();

    // Recursive function that accumulates numbers for the operation.
    const func = (n : number) => {
        nums.push(n);
        return func;
    }

    // When the recursive function is type cast to a number,
    //   reduce the accumulated numbers.
    func.valueOf = () => nums.reduce(addSubtractReducer, num);

    // Return the recursive function
    return func
}

// Given an array of numbers, if the index is even, add.
//   If the index is odd, subtract.
const addSubtractReducer = (
    total: number,
    current: number,
    index: number
): number => {
    return index % 2 === 0 ? total + current : total - current
}
