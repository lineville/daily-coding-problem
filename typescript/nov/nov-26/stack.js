// * Daily Coding Problem Nov 26 2019
/**
 * Implement a stack that has the following methods:
 * * push(val), which pushes an element onto the stack
 * * pop(), which pops off and returns the topmost element of the stack.
 * * If there are no elements in the stack, then it should throw an error or return null.
 * * max(), which returns the maximum value in the stack currently.
 * * If there are no elements in the stack, then it should throw an error or return null.
 */
var Stack = /** @class */ (function () {
    function Stack(vals) {
        var _this = this;
        this.push = function (val) {
            _this.stack.push(val);
        };
        this.pop = function () {
            if (_this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            return _this.stack.pop();
        };
        this.peek = function () {
            if (_this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            return _this.stack[_this.stack.length - 1];
        };
        this.clear = function () {
            _this.stack = [];
        };
        this.isEmpty = function () {
            return _this.stack.length === 0;
        };
        this.max = function () {
            if (_this.isEmpty()) {
                throw new Error("Stack is empty");
            }
            var max = _this.stack[0];
            for (var i = 0; i < _this.stack.length; i++) {
                if (_this.stack[i] > max) {
                    max = _this.stack[i];
                }
            }
            return max;
        };
        this.print = function () {
            for (var i = 0; i < _this.stack.length; i++) {
                console.log(_this.stack[i]);
            }
        };
        this.stack = vals || [];
    }
    return Stack;
}());
var testStack = function () {
    var s1 = new Stack([1, 5, 7, 25, 4, 9, 12]);
    var max = s1.max();
    console.log("Max: " + max);
};
testStack();
