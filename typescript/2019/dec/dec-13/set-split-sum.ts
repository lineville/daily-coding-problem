// * Daily Coding Problem Fri Dec 13 2019

// * [Medium] -- Facebook

/**
 * * Given a multiset (just an array that contains multiple sets) return true
 * * if the multiset can be split in two sets with the same sum.
 */

// ! Ex: split({15, 5, 20, 10, 35, 15, 10}) => {15, 5, 10, 15, 10}, {20, 35} sums = 55 true
// ! Ex: split({15, 5, 20, 10, 35}) => false



const split = (multiset : Array<number>) : boolean => {
    let result : boolean = false;


    // * Do the work
    const totalSum : number = multiset.reduce((prev, acc) => prev + acc, 0)
    if (totalSum % 2 === 1) {
        return result;
    }


    return result;
}





const testSplit = () : void => {
    const input1 : Array<number> = [15, 5, 20, 10, 35, 15, 10]
    const input2 : Array<number> = [15, 5, 20, 10, 35]

    const expectedResult1 : boolean = true
    const expectedResult2 : boolean = false

    const result1 : boolean = split(input1);
    const result2 : boolean = split(input2);

    console.log(expectedResult1 == result1 ? "Passed" : "Failed")
    console.log(expectedResult2 == result2 ? "Passed" : "Failed")
}
testSplit()