
# * Daily Coding Problem October 7th 2020

# * [Hard] -- Dropbox

# * Create a data structure that performs all the following operations in O(1) time:

# * plus: Add a key with value 1. If the key already exists, increment its value by one.
# * minus: Decrement the value of a key. If the key's value is currently 1, remove it.
# * get_max: Return a key with the highest value.
# * get_min: Return a key with the lowest value.


class SpecialHashTable:

    def __init__(self):
        self.values = {}

    def plus(self, key):
        if key in self.values:
            self.values[key] += 1
        else:
            self.values[key] = 1

    def minus(self, key):
        if key in self.values:
            if self.values[key] == 1:
                del self.values[key]
            else:
                self.values[key] -= 1
        else:
            self.values[key] = 1

    # This is not O(1)
    def get_max(self):
        return max(self.values, key=lambda x: self.values[x])

    # This is not O(1)
    def get_min(self):
        return min(self.values, key=lambda x: self.values[x])


def main():
    table = SpecialHashTable()
    table.plus('A')
    table.plus('A')
    table.plus('A')
    table.plus('A')
    table.plus('A')
    table.plus('B')
    table.plus('B')
    table.plus('B')
    print(table.get_max())
    print(table.get_min())


main()
