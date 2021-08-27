// * Daily Coding Problem August 27 2021

// * [Hard] -- LinkedIn

// Given a string, return whether it represents a number. Here are the different kinds of numbers:

// ! Examples of numbers that are valid
// "10", a positive integer
// "-10", a negative integer
// "10.1", a positive real number
// "-10.1", a negative real number
// "1e5", a number in scientific notation
// And here are examples of non-numbers:

// ! Examples of non-numbers
// "a"
// "x 1"
// "a -2"
// "-"


// Kinda cheating w regex try to do this with a DFA
export const isNumber = (val: string): boolean => {
    const regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    return regex.test(val);
};