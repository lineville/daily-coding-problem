
# * Daily Coding Problem September 10 2020

# * [Medium] -- LinkedIn

# * You are given a string consisting of the letters x and y, such as xyxxxyxyy.
# * In addition, you have an operation called flip, which changes a single x to y
# * or vice versa.

# * Determine how many times you would need to apply this operation to ensure
# * that all x's come before all y's. In the preceding example, it suffices
# * to flip the second and sixth characters, so you should return 2.

def flipsNeeded(x_and_ys: str) -> int:
    x = 0
    y = len(x_and_ys) - 1
    flips = 0

    while x < y:
        if x_and_ys[x] == 'y':
            flips += 1
        if x_and_ys[y] == 'x':
            flips += 1
        x += 1
        y -= 1
    return flips


def main():
    x_and_ys = "xyxxxyxyy"
    flips = flipsNeeded(x_and_ys)
    print(f"Number of flips to have all x's before all y's --> {flips}")


main()

# * --------------------------TESTS--------------------------------------


def testFlipsNeeded():
    assert flipsNeeded("xyxxxyxyy") == 2


def testFlipsNeeded():
    assert flipsNeeded("yxyxxxyxyyx") == 4
