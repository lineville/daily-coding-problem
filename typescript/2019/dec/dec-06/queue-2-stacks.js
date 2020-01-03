"use strict";
exports.__esModule = true;
var stack_1 = require("./stack");
// * Daily Coding Problem December 6th 2019
// * [Medium] -- Apple
/**
 * * Implement a queue using two stacks. Recall that a queue is a FIFO
 *  * (first-in, first-out) data structure with the following methods:
 *  * enqueue, which inserts an element into the queue, and dequeue,
 *  * which removes it.
 */
// * Use two stacks to make a Queue. This will make a costly dequeue but
// * a fast enqueue (you could do it either way).
var Queue = /** @class */ (function () {
    function Queue() {
        var _this = this;
        // * Preserve that oldest item is on top of stack1
        // * This is the costly part O(N)
        this.enqueue = function (val) {
            // * Push all of stack1 to stack2
            while (!_this.stack1.isEmpty()) {
                _this.stack2.push(_this.stack1.pop());
            }
            // * Push val on to stack1 so it is oldest value
            _this.stack1.push(val);
            // * Put all of stack2 back to stack1 (preserves order)
            while (!_this.stack2.isEmpty()) {
                _this.stack1.push(_this.stack2.pop());
            }
        };
        // * Just pop from stack1
        // * This is easy part O(1)
        this.dequeue = function () {
            return _this.stack1.pop();
        };
        this.stack1 = new stack_1["default"]();
        this.stack2 = new stack_1["default"]();
    }
    return Queue;
}());
var testQueue = function () {
    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    console.log(queue.dequeue());
    console.log(queue.dequeue());
    queue.enqueue(6);
    console.log(queue.dequeue());
};
testQueue();
