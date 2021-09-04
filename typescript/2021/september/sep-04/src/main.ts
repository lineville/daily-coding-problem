// * Daily Coding Problem September 4 2021

// * [Medium] -- Stripe

// reduce (also known as fold) is a function that takes in an array, a combining function, and an initial value 
// and builds up a result by calling the combining function on each element of the array, left to right. 
// For example, we can write sum() in terms of reduce:

// def add(a, b):
//     return a + b

// def sum(lst):
//     return reduce(lst, add, 0)
// This should call add on the initial value with the first element of the array, 
// and then the result of that with the second element of the array, and so on until we reach the end, 
// when we return the sum of the array.

// Implement your own version of reduce.

export function reduce<T>(list: Array<T>, combine: (acc: T, curr: T) => T, initial: T): T {
    let result = initial;
    for (let i = 0; i < list.length; i++) {
        result = combine(result, list[i]);
    }
    return result;
}