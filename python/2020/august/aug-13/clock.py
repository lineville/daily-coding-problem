
# * Daily Coding Problem August 13 2020

# * [Easy] -- Microsoft

# * Given a clock time in hh:mm format, determine, to the nearest degree,
# * the angle between the hour and the minute hands.

#  * Bonus: When, during the course of a day, will the angle be zero?
# TODO : Implement the bonus part!

# * Written by Linda Li
def zero():
    result = []
    for hour in range(1, 13):
        for minute in range(0, 60):
            minute = f"0{minute}" if minute < 10 else minute
            time = f"{hour}:{minute}"
            degrees = closestDegrees(time)
            if degrees == 0:
                result.append(time)
    return result

# * Returns the closestDegrees between the hour and the minute hands at time


def closestDegrees(time):
    # * Parse the hours and minutes
    hours, minutes = parseTime(time)

    # * Make sure we have valid values before procceeding
    validateTime(hours, minutes)

    # * Calculate the angle of the hour and minute hand relative to 12:00
    hoursAngle = (hours * 60 + minutes) * 0.5
    minutesAngle = minutes * 6

    # * Compute the absolute value of the difference in angle
    angleDifference = abs(hoursAngle - minutesAngle)

    # * Take the smaller value among the computed angle and it's circular complement
    return min(angleDifference, 360 - angleDifference)


# * Parses time "hh:mm" into two numbers
def parseTime(time):
    hours, minutes = time.split(":")
    return int(hours), int(minutes)


# * Verifies that 0 <= minutes <= 59 and 1 <= hours <= 12, if this fails
# * program will panic and exit, otherwise will silently return
def validateTime(hours, minutes):
    if hours < 1 or hours > 12 or minutes < 0 or minutes > 59:
        print("Invalid time!")
        exit(1)
