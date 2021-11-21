
# * Daily Coding Problem November 12 2021

# * [Easy] -- Zillow

# * A ternary search tree is a trie-like data structure where each node may have up to three children. 
# Here is an example which represents the words code, cob, be, ax, war, and we.

#       c
#    /  |  \
#   b   o   w
# / |   |   |
#a  e   d   a
#|    / |   | \ 
#x   b  e   r  e  

# * The tree is structured according to the following rules:

# * left child nodes link to words lexicographically earlier than the parent prefix
# * right child nodes link to words lexicographically later than the parent prefix
# * middle child nodes continue the current word
# * For instance, since code is the first word inserted in the tree, and cob lexicographically 
# * precedes cod, cob is represented as a left child extending from cod.
#
# ! Implement insertion and search functions for a ternary search tree.


class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.middle = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = Node(value)
            else:
                self.left.insert(value)
        elif value > self.value:
            if self.right is None:
                self.right = Node(value)
            else:
                self.right.insert(value)
        else:
            if self.middle is None:
                self.middle = Node(value)
            else:
                self.middle.insert(value)

    def search(self, value):
        if value < self.value:
            if self.left is None:
                return False
            else:
                return self.left.search(value)
        elif value > self.value:
            if self.right is None:
                return False
            else:
                return self.right.search(value)
        else:
            if self.middle is None:
                return False
            else:
                return self.middle.search(value)

    
    # Displays the tree
    def display(self):
        lines, *_ = self._display_aux()
        for line in lines:
            print(line)


    # Display tree helper
    def _display_aux(self):

        """Returns list of strings, width, height, and horizontal coordinate of the root."""
        # No child.
        if self.left is None and self.right is None and self.right is None:
            line = '%s' % self.value
            width = len(line)
            height = 1
            middle = width // 2
            return [line], width, height, middle

        # Only left child.
        if self.right is None and self.middle is None:
            lines, n, p, x = self.left._display_aux()
            s = '%s' % self.value
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '/' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        # Only middle child
        if self.left is None and self.right is None:
            lines, n, p, x = self.middle._display_aux()
            s = '%s' % self.value
            u = len(s)
            first_line = (x + 1) * ' ' + (n - x - 1) * '_' + s
            second_line = x * ' ' + '\\' + (n - x - 1 + u) * ' '
            shifted_lines = [line + u * ' ' for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, n + u // 2

        # Only right child.
        if self.left is None and self.middle is None:
            lines, n, p, x = self.right._display_aux()
            s = '%s' % self.value
            u = len(s)
            first_line = s + x * '_' + (n - x) * ' '
            second_line = (u + x) * ' ' + '\\' + (n - x - 1) * ' '
            shifted_lines = [u * ' ' + line for line in lines]
            return [first_line, second_line] + shifted_lines, n + u, p + 2, u // 2

        # Left and middle children
        if self.right is None:
            left, n, p, x = self.left._display_aux()
            middle, m, q, y = self.middle._display_aux()
            right = None

        # Middle and right children
        if self.left is None:
            left = None
            middle, n, p, x = self.middle._display_aux()
            right, m, q, y = self.right._display_aux()

        # Left and right children
        if self.middle is None:
            left, n, p, x = self.left._display_aux()
            middle = None
            right, m, q, y = self.right._display_aux()

        #  Three children
        left, n, p, x = self.left._display_aux()
        right, m, q, y = self.right._display_aux()
        middle, a, b, c = self.middle._display_aux()
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



def main():
    tree = Node('')
    tree.insert('code')
    tree.insert('cob')
    tree.insert('be')
    tree.insert('ax')
    tree.insert('war')
    tree.insert('we')

    foundCode = tree.search('code')
    foundCob = tree.search('cob')
    foundKobe = tree.search('kobe')
    print(foundCode, foundCob, foundKobe)


if __name__ == "__main__":
    main()