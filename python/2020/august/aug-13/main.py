
# * Daily Coding Problem August 13 2020

# * [Easy] -- Microsoft

# * Given a clock time in hh:mm format, determine, to the nearest degree,
# * the angle between the hour and the minute hands.

#  * Bonus: When, during the course of a day, will the angle be zero?


# * Returns the closestDegrees between the hour and the minute hands at time
def closestDegrees(time):
    hours, minutes = parseTime(time)

    hoursAngle = (hours * 60 + minutes) * 0.5
    minutesAngle = minutes * 6
    angleDifference = abs(hoursAngle - minutesAngle)
    return min(angleDifference, 360 - angleDifference)


# * Parses time "hh:mm" into two numbers
def parseTime(time):
    hours, minutes = time.split(":")
    return int(hours), int(minutes)


# * ____________________________MAIN_________________________________

# * Basic wrapper for closestDegrees that allows user to input a time
# * and view the smallest degrees and continue indefinitely
def main():
    keepGoing = True
    while keepGoing:
        time = input("Please enter a time in the format: hh:mm --> ")
        print(
            f"Smallest angle between hours and minutes hands at {time} is {closestDegrees(time)}")
        keepGoing = input("Again? [Y/N]").capitalize() == "Y"


# ! This is where the program starts!
main()

# * ____________________________TESTS_________________________________


def testMidnight():
    assert closestDegrees("12:00") == 0


def testSix():
    assert closestDegrees("6:00") == 180


def testNine():
    assert closestDegrees("9:00") == 90
