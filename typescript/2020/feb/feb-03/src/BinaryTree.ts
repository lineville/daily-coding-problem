export default class BinaryTree<T> {
  private value: T;
  private left: BinaryTree<T> | null;
  private right: BinaryTree<T> | null;
  private parent: BinaryTree<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  getLeft = () => {
    return this.left;
  };
  getRight = () => {
    return this.right;
  };
  getParent = () => {
    return this.parent;
  };
  getValue = () => {
    return this.value;
  };

  addLeftChild = (val: T): BinaryTree<T> => {
    const newNode = new BinaryTree<T>(val);
    this.left = newNode;
    newNode.parent = this;
    return newNode;
  };

  addRightChild = (val: T): BinaryTree<T> => {
    const newNode = new BinaryTree<T>(val);
    this.right = newNode;
    newNode.parent = this;
    return newNode;
  };

  containsSubTree = (subtree: BinaryTree<T> | null): boolean | undefined => {
    if (subtree == null) {
      return true;
    }

    if (this == null) {
      return false;
    }

    if (this.equals(subtree)) {
      return true;
    }

    return (
      this.getLeft()?.containsSubTree(subtree) ||
      this.getRight()?.containsSubTree(subtree)
    );
  };

  equals = (other: BinaryTree<T> | null): boolean | undefined => {
    if (other == null && this == null) {
      return true;
    }

    if (other == null || this == null) {
      return false;
    }

    return (
      this.getValue() == other?.getValue() &&
      this.getLeft()?.equals(other?.getLeft()) &&
      this.getRight()?.equals(other.getRight())
    );
  };
}
