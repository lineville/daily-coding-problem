
# * Daily Coding Problem August 3rd 2020

# * [Hard] -- Uber

# * You have N stones in a row, and would like to create from them a pyramid.
# * This pyramid should be constructed such that the height of each stone
# * increases by one until reaching the tallest stone, after which the heights
# * decrease by one. In addition, the start and end stones of the pyramid
# * should each be one stone high. You can change the height of any stone
# * by paying a cost of 1 unit to lower its height by 1, as many times as
# * necessary. Given this information, determine the lowest cost method
# * to produce this pyramid.

# ! Ex: [1, 1, 3, 3, 2, 1], the optimal solution is to pay 2 to create [0, 1, 2, 3, 2, 1].

# * Returns minimum cost to form a pyramid
def pyramid_creator(stones):
    N = len(stones)

    # Store the maximum possible pyramid height
    left = [0] * N
    right = [0] * N

    # Maximum height at start is 1
    left[0] = min(stones[0], 1)

    # For each position calculate maximum height
    for i in range(1, N):
        left[i] = min(stones[i],
                      min(left[i - 1] + 1, i + 1))

    # Maximum height at end is 1
    right[N - 1] = min(stones[N - 1], 1)

    # For each position calculate maximum height
    for i in range(N - 2, -1, -1):
        right[i] = min(stones[i],
                       min(right[i + 1] + 1, N - i))

    # Find minimum possible among calculated values
    tot = [0] * N
    for i in range(N):
        tot[i] = min(right[i], left[i])

    # Find maximum height of pyramid
    max_ind = 0
    for i in range(N):
        if tot[i] > tot[max_ind]:
            max_ind = i

    # Calculate cost of this pyramid
    cost = 0
    height = tot[max_ind]

    # Calculate cost of left half
    for x in range(max_ind, -1, -1):
        cost += stones[x] - height
        if height > 0:
            height -= 1

    # Calculate cost of right half
    height = tot[max_ind] - 1
    for x in range(max_ind + 1, N):
        cost += stones[x] - height
        if height > 0:
            height -= 1

    return cost


def main():
    stones = [1, 1, 3, 3, 2, 1]
    print(f'Stones --> {stones}')
    cost = pyramid_creator(stones)
    print(f'Optimal solution for pyramid costs {cost}')


main()
