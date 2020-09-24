from binarytree import BinaryTree
from pprint import pprint


def sumWithinRange(tree, rng):
    total = 0

    return total


def main():
    leftTree = BinaryTree(3)
    leftTree.addLeftChild(2)
    leftTree.addRightChild(4)

    rightTree = BinaryTree(8)
    rightTree.addLeftChild(6)
    rightTree.addRightChild(10)

    tree = BinaryTree(5)
    tree.setLeftChild(leftTree)
    tree.setRightChild(rightTree)

    print("Binary tree\n--------------------------------\n")
    pprint(vars(tree))
    rng = [4, 9]
    result = sumWithinRange(tree, rng)
    print(f"Sum of elements in range {rng} --> {result}")


main()

# ____________________________Tests________________________________


def testSumWithinRange():
    leftTree = BinaryTree(3)
    leftTree.addLeftChild(2)
    leftTree.addRightChild(4)

    rightTree = BinaryTree(8)
    rightTree.addLeftChild(6)
    rightTree.addRightChild(10)

    tree = BinaryTree(5)
    tree.setLeftChild(leftTree)
    tree.setRightChild(rightTree)
    assert sumWithinRange(tree, [4, 9]) == 23
