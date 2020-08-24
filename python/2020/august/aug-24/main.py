
# * Daily Coding Problem August 24 2020

# * [Medium] -- Spotify

# * You are the technical director of WSPT radio, serving listeners nationwide.
# * For simplicity's sake we can consider each listener to live along a horizontal
# * line stretching from 0 (west) to 1000 (east).

# * Given a list of N listeners, and a list of M radio towers, each placed at various locations
# * along this line, determine what the minimum broadcast range would have to be in order
# * for each listener's home to be covered.

# ! Ex: listeners = [1, 5, 11, 20], and towers = [4, 8, 15].
# * In this case the minimum range would be 5, since that would be required for the tower
# * at position 15 to reach the listener at position 20.

from typing import List

MAX_RANGE = 1000


# Returns the minimum range the service provider would need to emit to cover all the
# given listeners with the given towers
def minimumRange(listeners: List[int], towers: List[int]) -> int:
    result = 0
    towerIndex = 0
    for listener in listeners:
        closestDistanceToTower = abs(towers[towerIndex] - listener)
        while abs(towers[towerIndex] + 1 - listener) < closestDistanceToTower and towerIndex < len(towers) - 1:
            towerIndex += 1
            closestDistanceToTower = abs(towers[towerIndex] - listener)
        result = max(result, closestDistanceToTower)
        towerIndex = 0
    return result


# Assuming these are sorted
def visualizeBroadcast(listeners: List[int], towers: List[int]):
    result = ""
    listenerIndex = 0
    towerIndex = 0
    for i in range(0, MAX_RANGE):
        if listenerIndex < len(listeners) and listeners[listenerIndex] == i:
            result += '🧍'
            listenerIndex += 1
        elif towerIndex < len(towers) and towers[towerIndex] == i:
            result += '⚡'
            towerIndex += 1
        else:
            result += '_'

        if listenerIndex == len(listeners) and towerIndex == len(towers):
            break
    return result


def main():
    listeners = [1, 5, 11, 20]
    towers = [4, 8, 15]
    minRange = minimumRange(listeners, towers)
    print(f"Listeners: {listeners}")
    print(f"Towers: {towers}")
    print(visualizeBroadcast(listeners, towers))
    print(
        f"Minimum range needed to provide service to all listeners --> {minRange}")


if __name__ == "__main__":
    main()
