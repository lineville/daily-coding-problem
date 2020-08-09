# Python 3 program to find longest
# subarray with k or less distinct elements.

# function to print the longest sub-array
def longest_stretch_two_apples(apples):
    n = len(apples)
    k = 2
    freq = [0] * n

    start = 0
    end = 0
    now = 0
    l = 0
    for i in range(n):

        # mark the element visited
        freq[apples[i]] += 1

        # if its visited first time, then increase
        # the counter of distinct elements by 1
        if (freq[apples[i]] == 1):
            now += 1

        # When the counter of distinct elements
        # increases from k, then reduce it to k
        while (now > k):

            # from the left, reduce the number
            # of time of visit
            freq[apples[l]] -= 1

            # if the reduced visited time element
            # is not present in further segment
            # then decrease the count of distinct
            # elements
            if (freq[apples[l]] == 0):
                now -= 1

            # increase the subsegment mark
            l += 1

        # check length of longest sub-segment
        # when greater then previous best
        # then change it
        if (i - l + 1 >= end - start + 1):
            end = i
            start = l

    # print the longest sub-segment
    print(apples[start:end + 1])
    return end + 1 - start


def test_longest_stretch_two_apples():
    apples = [2, 1, 2, 3, 3, 1, 3, 5]
    assert longest_stretch_two_apples(apples) == 4


def main():
    apples = [2, 1, 2, 3, 3, 1, 3, 5]
    longest_stretch = longest_stretch_two_apples(apples)
    print(longest_stretch)


main()
