# Daily Coding Problem July 29 2021.

# [Medium] -- Facebook

# Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

# For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up 
# into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

# Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two 
# subsets that add up to the same sum.

def canEquallyPartition(multiset):
    # Pre-sort the list
    multiset.sort()
    
    start = 0
    end = len(multiset) - 1
    
    leftSet = [multiset[start]]
    rightSet = [multiset[end]]

    start += 1
    end -= 1


    while start <= end:
        if sum(leftSet) < sum(rightSet):
            leftSet.append(multiset[start])
            start += 1
        else:
            rightSet.append(multiset[end])
            end -= 1

    return sum(leftSet) == sum(rightSet)


def main():
    print(canEquallyPartition([15, 5, 20, 10, 35, 15, 10]))
    print(canEquallyPartition([15, 5, 20, 10, 35]))


main()