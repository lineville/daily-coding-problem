// * Daily Coding Problem Feb 3rd 2020 2018

// * [Hard] -- Google

// * Lowest Common Ancestor solution for BinaryTree

export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinaryTree<T> {
  root: Node<T>;
  foundFirst: boolean;
  foundSecond: boolean;

  constructor(rootVal : T) {
    this.root = new Node<T>(rootVal);
    this.foundFirst = false;
    this.foundSecond = false;
  }

  findLowestCommonAncestor = (node1: T, node2: T): Node<T> | null=> {
    this.foundFirst = false;
    this.foundSecond = false;
    const lowestCommonAncestor : Node<T> | null = this.findLowestCommonAncestorHelper(this.root, node1, node2);

    if (this.foundFirst && this.foundSecond) {
      return lowestCommonAncestor;
    }
    return null;
  };


  findLowestCommonAncestorHelper = (node : Node<T> | null, node1 : T, node2 : T) : Node<T> | null=> {
    if (node == null) {
      return null;

    }
    let tempNode : Node<T> | null = null;
    if (node.value === node1) {
      this.foundFirst = true;
      tempNode = node;
    }
    if (node.value === node2) {
      this.foundSecond = true;
      tempNode = node;
    }

    let leftLowestCommonAncestor : Node<T> | null = this.findLowestCommonAncestorHelper(node.left, node1, node2);
    let rightLowestCommonAncestor : Node<T> | null = this.findLowestCommonAncestorHelper(node.right, node1, node2);

    if (tempNode !== null) {
      return tempNode;
    }

    if (leftLowestCommonAncestor !== null && rightLowestCommonAncestor !== null) {
      return node;
    }

    return (leftLowestCommonAncestor !== null) ? leftLowestCommonAncestor : rightLowestCommonAncestor;

  }
}
