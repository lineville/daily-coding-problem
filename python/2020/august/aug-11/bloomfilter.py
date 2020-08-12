
# * Daily Coding Problem August 11 2020

# * [Medium] -- TripleByte

# * Implement a data structure which carries out the following operations
# * without resizing the underlying array:

# * add(value): Add a value to the set of values.
# * check(value): Check whether a value is in the set.

# * The check method may return occasional false positives
# * (in other words, incorrectly identifying an element as
# * part of the set), but should always correctly identify a true element.

# * This article was used in writing this code:
#  https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/

# * A bloom filter will be used to store the data to allow infinite adds with
# * partially incorrect results about membership
import math
import mmh3
from bitarray import bitarray


class BloomFilter(object):

    def __init__(self, size, falsePositiveProbability):
        # False posible probability in decimal
        self.falsePositiveProbability = falsePositiveProbability

        # Size of bit array to use
        self.size = self.get_size(size, falsePositiveProbability)

        # number of hash functions to use
        self.hash_count = self.get_hash_count(self.size, size)

        # Bit array of given size
        self.bit_array = bitarray(self.size)

        # initialize all bits as 0
        self.bit_array.setall(0)

    def add(self, item):
        digests = []
        for i in range(self.hash_count):

            # create digest for given item.
            # i work as seed to mmh3.hash() function
            # With different seed, digest created is different
            digest = mmh3.hash(item, i) % self.size
            digests.append(digest)
            print(digests)

            # set the bit True in bit_array
            self.bit_array[digest] = True

    def check(self, item):
        for i in range(self.hash_count):
            digest = mmh3.hash(item, i) % self.size
            if self.bit_array[digest] == False:

                # if any of bit is False then,its not present
                # in filter
                # else there is probability that it exist
                return False
        return True

    @classmethod
    def get_size(self, n, p):
        m = -(n * math.log(p))/(math.log(2)**2)
        return int(m)

    @classmethod
    def get_hash_count(self, m, n):
        k = (m/n) * math.log(2)
        return int(k)

    def show(self):
        print(self.items)


# def testBloomFiler1():
    # bloom = BloomFilter(10)s


# def main():
#     bloomFilter = BloomFilter(10, .05)
#     bloomFilter.show()
#     bloomFilter.add("Liam")


# main()
