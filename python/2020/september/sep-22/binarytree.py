
class BinaryTree:

    def __init__(self, rootValue):
        self.value = rootValue
        self.left = None
        self.right = None

    def addLeftChild(self, val):
        newNode = BinaryTree(val)
        self.left = newNode

    def addRightChild(self, val):
        newNode = BinaryTree(val)
        self.right = newNode

    def setLeftChild(self, child):
        self.left = child

    def setRightChild(self, child):
        self.right = child
