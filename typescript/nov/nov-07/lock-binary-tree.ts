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
class LockBinaryTree<T> {
  parent: LockBinaryTree<T>;
  leftChild: LockBinaryTree<T> | null;
  rightChild: LockBinaryTree<T> | null;
  locked: boolean;
  value: T | null;

  // * Creates a new node with value or value as null
  constructor(val?: T) {
    this.value = val || null;
    this.locked = false;
  }

  addLeftChild = (node: LockBinaryTree<T>): void => {
    this.leftChild = node;
    node.parent = this;
  };

  addRightChild = (node: LockBinaryTree<T>): void => {
    this.rightChild = node;
    node.parent = this;
  };

  // * Checks whether this node is locked (this node and none of its children can be locked)
  isLocked = (): boolean => {
    if (!this.leftChild && !this.rightChild) {
      return this.locked;
    }

    if (!this.leftChild) {
      return this.rightChild.isLocked();
    }

    if (!this.rightChild) {
      return this.leftChild.isLocked();
    }
    return this.leftChild.isLocked() || this.rightChild.isLocked();
  };

  // * Attempts to lock this node (can be locked if all of its children or all of parents are unlocked)
  // * Sets this node to locked and return true. Return false if can't lock
  lock = (): boolean => {
    if (!this.isLocked()) {
      this.locked = true;
      return true;
    }
    return false;
  };

  // * Attempts to unlock this node (can be locked if all of its children or all of parents are unlocked)
  // * Sets this node to unlocked and return true. Return false if can't lock
  unlock = (): boolean => {
    if (!this.isLocked()) {
      this.locked = false;
      return true;
    }
    return false;
  };
}

const treeSetup = (): LockBinaryTree<string> => {
  const a = new LockBinaryTree<string>("A");
  const b = new LockBinaryTree<string>("B");
  const c = new LockBinaryTree<string>("C");
  const d = new LockBinaryTree<string>("D");
  const e = new LockBinaryTree<string>("E");
  const f = new LockBinaryTree<string>("F");
  const g = new LockBinaryTree<string>("G");

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

const testLockTree = (): void => {
  const tree: LockBinaryTree<string> = treeSetup();
  let result: boolean = tree.lock();
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
