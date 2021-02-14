
# * Daily Coding Problem February 14th 2021

# * [Medium] -- Yext

# * Two nodes in a binary tree can be called cousins
# * if they are on the same level of the tree but have different parents.
# ! For example, in the following diagram 4 and 6 are cousins.
#     1
#    / \
#   2   3
#  / \   \
# 4   5   6


class Node:

    # Constructor to create a new node
    def __init__(self, data):
        self.key = data
        self.left = None
        self.right = None
        self.parent = None

    def insertLeft(self, data):
        newNode = Node(data)
        newNode.parent = self
        self.left = newNode
        return newNode

    def insertRight(self, data):
        newNode = Node(data)
        newNode.parent = self
        self.right = newNode
        return newNode

    def findCousins(self):
        parent = self.parent
        # Root can't have any cousins
        if parent is None:
            return []

        grandParent = parent.parent
        # Second level can't have cousins since only one parent (root)
        if grandParent is None:
            return []

        # If our parent was the left then the uncle is right and vice versa
        uncle = grandParent.right if grandParent.left.key == parent.key else grandParent.left
        cousins = []

        # Add 0, 1 or 2 cousins and return
        if uncle.left is not None:
            cousins.append(uncle.left.key)
        if uncle.right is not None:
            cousins.append(uncle.right.key)
        return cousins


def printTree(node, level=0):
    if node != None:
        printTree(node.left, level + 1)
        print(' ' * 4 * level + '->', node.key)
        printTree(node.right, level + 1)


# Driver Code
if __name__ == '__main__':

    # Let us create following
    #     1
    #    / \
    #   2   3
    #  / \   \
    # 4   5   6
    root = Node(1)
    two = root.insertLeft(2)
    three = root.insertRight(3)
    four = two.insertLeft(4)
    five = two.insertRight(5)
    six = three.insertLeft(6)

    printTree(root)

    cousinsOfSix = six.findCousins()
    cousinsOfFive = five.findCousins()
    cousinsOfFour = four.findCousins()
    cousinsOfThree = three.findCousins()
    cousinsOfTwo = two.findCousins()
    cousinsOfOne = root.findCousins()

    print(f"Cousins of 6: {cousinsOfSix}")
    print(f"Cousins of 5: {cousinsOfFive}")
    print(f"Cousins of 4: {cousinsOfFour}")
    print(f"Cousins of 3: {cousinsOfThree}")
    print(f"Cousins of 2: {cousinsOfTwo}")
    print(f"Cousins of 1: {cousinsOfOne}")
