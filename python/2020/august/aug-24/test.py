# ------------------------TESTS------------------------

# > pytest test.py


from main import minimumRange, visualizeBroadcast


def testMinimumRange():
    listeners = [1, 5, 11, 20]
    towers = [4, 8, 15]
    assert minimumRange(listeners, towers) == 5


def testMinimumRange2():
    listeners = [1, 5, 11, 18]
    towers = [4, 8, 15]
    assert minimumRange(listeners, towers) == 4


def testVisualizeBroadcast():
    listeners = [1, 5, 11, 20]
    towers = [4, 8, 15]
    assert visualizeBroadcast(listeners, towers) == '_🧍__⚡🧍__⚡__🧍___⚡____🧍'
