export default class BinaryTree {
  value: number
  left: BinaryTree | null
  right: BinaryTree | null

  constructor(val: number) {
    this.value = val
    this.left = null
    this.right = null
  }

  addLeft = (val: number): void => {
    const newNode: BinaryTree = new BinaryTree(val)
    this.left = newNode
  }

  addRight = (val: number): void => {
    const newNode: BinaryTree = new BinaryTree(val)
    this.right = newNode
  }

  isBinarySearchTree = (root: BinaryTree | null): boolean => {
    if (root === null) {
      return true
    }

    if (root.left !== null && root.left?.value > root.value) {
      return false
    }

    if (root.right !== null && root.right?.value < root.value) {
      return false
    }

    return (
      this.isBinarySearchTree(root.left) && this.isBinarySearchTree(root.right)
    )
  }
}
