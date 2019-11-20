// Daily Coding Problem
// Nov 7 2019
/**
 * Implement locking in a binary tree. A binary tree node can be locked or
 unlocked only if all of its descendants or ancestors are not locked.
 
 Design a binary tree node class with the following methods:
 
 is_locked, which returns whether the node is locked
 lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
 unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
 
 You may augment the node to add parent pointers or any other property you would like.
 You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes.
 Each method should run in O(h), where h is the height of the tree.
 *  */
/**
 * * Generic Binary Tree with Locks
 */
var LockBinaryTree = /** @class */ (function () {
    // * Creates a new node with value or value as null
    function LockBinaryTree(val) {
        var _this = this;
        this.addLeftChild = function (node) {
            _this.leftChild = node;
            node.parent = _this;
        };
        this.addRightChild = function (node) {
            _this.rightChild = node;
            node.parent = _this;
        };
        // * Checks whether this node is locked (this node and none of its children can be locked)
        this.isLocked = function () {
            if (!_this.leftChild && !_this.rightChild) {
                return _this.locked;
            }
            if (!_this.leftChild) {
                return _this.rightChild.isLocked();
            }
            if (!_this.rightChild) {
                return _this.leftChild.isLocked();
            }
            return _this.leftChild.isLocked() || _this.rightChild.isLocked();
        };
        // * Attempts to lock this node (can be locked if all of its children or all of parents are unlocked)
        // * Sets this node to locked and return true. Return false if can't lock
        this.lock = function () {
            if (!_this.isLocked()) {
                _this.locked = true;
                return true;
            }
            return false;
        };
        // * Attempts to unlock this node (can be locked if all of its children or all of parents are unlocked)
        // * Sets this node to unlocked and return true. Return false if can't lock
        this.unlock = function () {
            if (!_this.isLocked()) {
                _this.locked = false;
                return true;
            }
            return false;
        };
        this.value = val || null;
        this.locked = false;
    }
    return LockBinaryTree;
}());
var treeSetup = function () {
    var a = new LockBinaryTree("A");
    var b = new LockBinaryTree("B");
    var c = new LockBinaryTree("C");
    var d = new LockBinaryTree("D");
    var e = new LockBinaryTree("E");
    var f = new LockBinaryTree("F");
    var g = new LockBinaryTree("G");
    b.addLeftChild(d);
    b.addRightChild(e);
    c.addLeftChild(f);
    c.addRightChild(g);
    a.addLeftChild(b);
    a.addRightChild(c);
    return a;
    // * ---------TREE BELOW---------------
    // *            A
    // *          /  \
    // *        B     C
    // *      /  \  /  \
    // *    D    E F   G
    // * ----------------------------------
};
var testLockTree = function () {
    var tree = treeSetup();
    var result = tree.lock();
    console.log("Should be true: " + result);
    //   console.log(tree);
    result = tree.unlock();
    console.log("Should be true: " + result);
    //   console.log(tree);
    tree.leftChild.leftChild.lock();
    result = tree.lock();
    console.log("Should be false: " + result);
};
testLockTree();
