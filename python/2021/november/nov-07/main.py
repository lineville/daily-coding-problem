# * Daily Coding Problem November 7 2021

# * [Easy] -- Apple

# Given the root of a binary tree, find the most frequent subtree sum. 
# The subtree sum of a node is the sum of all values under a node, including the node itself.

class Node():
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def find_frequent_subtree_sum(root, sums = {}):
    if root.left is None and root.right is None: # Leaf node
        sums[root.val] = sums.get(root.val, 0) + 1
        return root.val
    elif root.left is not None and root.right is None: # Only left child
        left_sum = find_frequent_subtree_sum(root.left, sums)
        subtree_sum = root.val + left_sum
        sums[subtree_sum] = sums.get(subtree_sum, 0) + 1
        return subtree_sum
    elif root.right is not None and root.left is None: # Only right child
        right_sum = find_frequent_subtree_sum(root.right, sums)
        subtree_sum = root.val + right_sum
        sums[subtree_sum] = sums.get(subtree_sum, 0) + 1
        return subtree_sum
    else: # Has both children
        left_sum = find_frequent_subtree_sum(root.left, sums)
        right_sum = find_frequent_subtree_sum(root.right, sums)
        subtree_sum = left_sum + right_sum + root.val
        sums[subtree_sum] = sums.get(subtree_sum, 0) + 1
        return subtree_sum



def main():
    root = Node(5, Node(2), Node(-5))
    print("Most common sum: " + str(find_frequent_subtree_sum(root)))


if __name__ == "__main__":
    main()
