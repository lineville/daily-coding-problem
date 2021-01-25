
# * Daily Coding Problem Jan 24 2020
# * [Easy] -- Amazon

# A tree is symmetric if its data and shape remain unchanged when it is reflected about the root node.
# The following tree is an example:

'''
        4
      / | \
    3   5   3
  /           \
9              9
'''

# * Given a n-ary tree determine if it is symmetric


class Node:

    def __init__(self, data):
        self.data = data
        self.children = []


def isSymmetric(node1: Node, node2: Node) -> bool:
    if node1 is None and node2 is None:
        return True
    elif node1 is None or node2 is None:
        return False
    elif node1.data == node2.data:
        i = 0
        j = len(node2.children) - 1
        while i < len(node1.children) and j >= 0:
            if not isSymmetric(node1.children[i], node2.children[j]):
                break
            i += 1
            j -= 1

        if i < len(node1.children) or j >= 0:
            return False
        else:
            return True
    else:
        return False


def isTreeSymmetric(root: Node) -> bool:
    return isSymmetric(root, root)


def main():
    root = Node(4)

    threeLeft = Node(3)
    nineLeft = Node(9)
    threeLeft.children.append(nineLeft)

    five = Node(5)

    threeRight = Node(3)
    nineRight = Node(9)
    threeRight.children.append(nineRight)

    root.children.append(threeLeft)
    root.children.append(five)
    root.children.append(threeRight)

    result = isTreeSymmetric(root)
    print(f"Is symmetric? --> {result}")


main()


# _________________TESTS_________________

def testIsTreeSymmetric1():
    root = Node(4)

    threeLeft = Node(3)
    nineLeft = Node(9)
    threeLeft.children.append(nineLeft)

    five = Node(5)

    threeRight = Node(3)
    nineRight = Node(9)
    threeRight.children.append(nineRight)

    root.children.append(threeLeft)
    root.children.append(five)
    root.children.append(threeRight)

    assert isTreeSymmetric(root) == True


def testIsTreeSymmetric2():
    root = Node(4)

    threeLeft = Node(3)
    nineLeft = Node(9)
    threeLeft.children.append(nineLeft)

    five = Node(5)

    threeRight = Node(3)
    nineRight = Node(9)
    elevenRight = Node(11)
    nineRight.children.append(elevenRight)
    threeRight.children.append(nineRight)

    root.children.append(threeLeft)
    root.children.append(five)
    root.children.append(threeRight)

    assert isTreeSymmetric(root) == False
