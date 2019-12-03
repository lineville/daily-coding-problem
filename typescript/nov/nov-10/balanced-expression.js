// Daily Coding Problem Nov 10 2019
// Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).
// ! EX: wellFormed("([])[]({})") => true
// ! EX: wellFormed("((()") => false
// ! EX: wellFormed("([)]") => false
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = new Array();
    }
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.push = function (val) {
        this.stack.push(val);
    };
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    return Stack;
}());
var wellFormed = function (expression) {
    var stack = new Stack();
    for (var i = 0; i < expression.length; i++) {
        switch (expression[i]) {
            case "(":
            case "{":
            case "[":
                stack.push(expression[i]);
                break;
            case ")":
            case "}":
            case "]":
                if (matches(stack.peek(), expression[i])) {
                    stack.pop();
                }
                break;
            default:
                break;
        }
    }
    return stack.isEmpty();
};
var matches = function (open, close) {
    if (open === "{") {
        return close === "}";
    }
    if (open === "[") {
        return close === "]";
    }
    if (open === "(") {
        return close === ")";
    }
    return false;
};
var testWellFormed = function () {
    var expression1 = "([])[]({})";
    var expression2 = "((()";
    var expression3 = "([)]";
    var expectedResult1 = true;
    var expectedResult2 = false;
    var expectedResult3 = false;
    var result1 = wellFormed(expression1);
    var result2 = wellFormed(expression2);
    var result3 = wellFormed(expression3);
    console.log(expectedResult1 == result1 ? "Passed ✔️" : "Failed ❌");
    console.log(expectedResult2 == result2 ? "Passed ✔️" : "Failed ❌");
    console.log(expectedResult3 == result3 ? "Passed ✔️" : "Failed ❌");
};
testWellFormed();
