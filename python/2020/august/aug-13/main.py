from clock import closestDegrees

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
if __name__ == "__main__":
    main()
