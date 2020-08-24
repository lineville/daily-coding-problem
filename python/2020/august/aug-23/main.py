
# * Daily Coding Problem August 23 2020

# * [Hard] -- Citrix

''' 
You are given a circular lock with three wheels, each of which display
the numbers 0 through 9 in order. Each of these wheels rotate clockwise
and counterclockwise.

In addition, the lock has a certain number of "dead ends", meaning that
if you turn the wheels to one of these combinations, the lock becomes stuck
in that state and cannot be opened.

Let us consider a "move" to be a rotation of a single wheel by one digit, 
in either direction. Given a lock initially set to 000, a target combination,
and a list of dead ends, write a function that returns the minimum number of 
moves required to reach the target state, or None if this is impossible.

'''

from typing import List
from lock import Lock


# * Returns the least number of moves required to reach target locker combo

def leastNumberOfMoves(start: Lock, target: Lock, deadSpots: List[Lock]):
    moves = 0

    while start != target:
        nextComboOptions = [start.rotateFirst(
            True), start.rotateSecond(True), start.rotateThird(True)]
        validOptions = list(
            filter(lambda x: x not in deadSpots, nextComboOptions))
        print(validOptions)
        moves += validOptions.len()
    return moves


def main():
    start = Lock(0, 0, 0)
    target = Lock(2, 8, 5)
    deadSpots = [Lock(1, 0, 0), Lock(2, 8, 4), Lock(2, 8, 0)]
    result = leastNumberOfMoves(start, target, deadSpots)
    print(
        f"Least number of moves to reach {target} from {start} while avoiding {deadSpots} is {result}")

    print(start == target)


main()
