import sys
import io

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def serialize(node: Node) -> str:
    result = ""
    if (node == None):
        
    result += serialize(node.left)
    result += serialize(node.right)



def deserialize(string: str) -> Node:
    return Node('val')
    


node = Node('root', Node('left', Node('left.left')), Node('right'))

#               None
#       right <
# root<         None
#      \       None
#       left <        None
#              Left < 
#                     None

stringified = serialize(node)
print(stringified)
# nodified = deserialize(stringified)

# leftLeft = nodified.left.left.val
# print(leftLeft)

# assert leftLeft == 'left.left'




