// * Daily Coding Problem January 07 2020
// * [Medium] -- Facebook
/**
 * * Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0.
 * * Only allowed to use mathematical or bit operations.
 * * You can assume b can only be 1 or 0.
 */
var didTestPass = require('simple-unit-test-utility').didTestPass;
var bitwiseTernary = function (nums) {
    // * Array destructuring to declare three new 
    var x = nums[0], y = nums[1], b = nums[2];
    // * This is cheating below
    // ! return b === 1 ? x : y
    // * The way Facebook would like us to answer this
    var mask = -b;
    return (x & mask) | (y & ~mask);
};
var testBitWiseTernary = function () {
    var inputs1 = [10, 20, 1];
    var inputs2 = [10, 20, 0];
    var expected1 = 10;
    var expected2 = 20;
    var result1 = bitwiseTernary(inputs1);
    var result2 = bitwiseTernary(inputs2);
    didTestPass(expected1, result1);
    didTestPass(expected2, result2);
};
testBitWiseTernary();
