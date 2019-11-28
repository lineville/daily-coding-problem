// Daily Coding Problem
// Nov 9 2019
// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.
// The list is very long, so making more than one pass is prohibitively expensive.
// Do this in constant space and in one pass.
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.value = val;
        this.next = null;
    }
    LinkedListNode.prototype.appendNode = function (node) {
        this.next = node;
    };
    LinkedListNode.prototype.printNode = function () {
        console.log(this.value);
    };
    return LinkedListNode;
}());
var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
a.appendNode(b);
b.appendNode(c);
a.printNode();
b.printNode();
c.printNode();
