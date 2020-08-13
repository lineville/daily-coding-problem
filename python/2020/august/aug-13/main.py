from clock import closestDegrees

# * ____________________________MAIN_________________________________

# * Prints out the smallest angle in degrees that seperates the minutes
# * and hours hands of a clock at the time specified by the user.


def main():
    shouldKeepGoing = True
    while shouldKeepGoing:
        time = input("Please enter a time in the format: hh:mm --> ")
        print(f"Angle at {time} is {closestDegrees(time)} °")
        userResponse = input("Another? ( Y / N )").capitalize()
        shouldKeepGoing = userResponse == "Y"
    print("Have a good one 😁!")
    exit(0)


# ! This is where the program starts!
if __name__ == "__main__":
    main()
