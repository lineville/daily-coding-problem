"use strict";
// * Daily Coding Problem Jan 8th 2020
exports.__esModule = true;
// * [Medium] -- Google ( Good one for coding lesson )
var ts_data_stack_1 = require("ts-data.stack");
// * Use a stack to push on open parens and pop off close parens.
// * At the end the number of symbols left in stack should be returned
exports.numParensToRemove = function (inputString) {
    var stack = new ts_data_stack_1["default"]();
    // * Execute this block of code inputString.length times
    for (var i = 0; i < inputString.length; i++) {
        var paren = inputString[i];
        if (paren !== ')' && paren !== '(') {
            throw new Error('Not a paren!');
        }
        if (paren === ')') {
            if (!stack.isEmpty() && stack.peek() === '(') {
                stack.pop();
            }
            else {
                stack.push(paren);
            }
        }
        else {
            stack.push(paren);
        }
    }
    return stack.count();
};
var input = '(((()(()()()))))';
var result = exports.numParensToRemove(input);
console.log(result);
