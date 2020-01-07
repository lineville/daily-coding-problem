// * Daily Coding Problem January 07 2020


// * [Medium] -- Facebook
/**
 * * Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0.
 * * Only allowed to use mathematical or bit operations. 
 * * You can assume b can only be 1 or 0.
 */

const { didTestPass } = require('simple-unit-test-utility');


const bitwiseTernary = (nums : Array<number>) : number => {
    // * Array destructuring to declare three new 
    const [x, y, b] : Array<number> = nums
    // * This is cheating below (or the way any sane human would write this)
    // ! return b === 1 ? x : y
    
    
    // * The way Facebook would like us to answer this
    const mask : number = -b
    return (x & mask) | (y & ~mask)
}

const testBitWiseTernary = () : void => {
    const inputs1 : Array<number> = [10, 20, 1]
    const inputs2 : Array<number> = [10, 20, 0]
    const expected1 : number = 10;
    const expected2 : number = 20;
    const result1 : number = bitwiseTernary(inputs1);
    const result2 : number = bitwiseTernary(inputs2);
    didTestPass(expected1, result1);
    didTestPass(expected2, result2);
}

testBitWiseTernary()

