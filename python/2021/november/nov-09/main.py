
# * Daily Coding Problem November 9 2021

# * [Medium] -- Jane Street

# * Generate a finite, but an arbitrarily large binary tree quickly in O(1).

# * That is, generate() should return a tree whose size is unbounded but finite. 

from random import randint

# Binary Tree Node where left and right are just facades.
# Calling get_left and get_right will generate a new Node 50% of the time.
class Node(object):
    def __init__(self, value):
        self.value = value
    
    # Flip a coin, if heads -> create a new node, if tails -> dead end.
    def get_left(self):
        make_node = randint(0, 1)
        if make_node == 1:
            return Node(randint(0, 10))
        else:
            return None

    # Flip a coin, if heads -> create a new node, if tails -> dead end.
    def get_right(self):
        make_node = randint(0, 1)
        if make_node == 1:
            return Node(randint(0, 10))
        else:
            return None

    # Displays the tree
    def display(self):
        lines, *_ = self._display_aux()
        for line in lines:
            print(line)


    # Display tree helper
    def _display_aux(self):
        left_child = self.get_left()
        right_child = self.get_right()

        """Returns list of strings, width, height, and horizontal coordinate of the root."""
        # No child.
        if left_child is None and right_child is None:
            line = '%s' % self.value
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        # Only left child.
        if right_child is None:
            lines, n, p, x = left_child._display_aux()
            s = '%s' % self.value
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        # Only right child.
        if left_child is None:
            lines, n, p, x = right_child._display_aux()
            s = '%s' % self.value
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        # Two children.
        left, n, p, x = left_child._display_aux()
        right, m, q, y = right_child._display_aux()
        s = '%s' % self.value
        u = len(s)
        first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s + y * '_' + (m - y) * ' '
        second_line = x * ' ' + '/' + (n - x - 1 + u + y) * ' ' + '\\' + (m - y - 1) * ' '
        if p < q:
            left += [n * ' '] * (q - p)
        elif q < p:
            right += [m * ' '] * (p - q)
        zipped_lines = zip(left, right)
        lines = [first_line, second_line] + [a + u * ' ' + b for a, b in zipped_lines]
        return lines, n + m + u, max(p, q) + 2, n + u // 2


# Generates a finite but arbitrarily large binary tree in constant time. O(1)
# The trick is that the tree is not really constructed here, it gets constructed on the fly as needed.
def generateTree():
    return Node(randint(0, 10))


def main():
    print("Generating a random tree...\n")
    tree = generateTree()
    tree.display()

if __name__ == "__main__":
    main()