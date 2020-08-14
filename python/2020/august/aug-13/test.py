from main import closestDegrees, zero

# * ____________________________TESTS_________________________________


def testMidnight():
    assert closestDegrees("12:00") == 0


def testSix():
    assert closestDegrees("6:00") == 180


def testNine():
    assert closestDegrees("9:00") == 90


def testFiveFortyEight():
    assert closestDegrees("5:48") == 114


def testZero():
    assert zero() == ['12:00']
