
class Lock:

    def __init__(self, first, second, third):
        self.first = first
        self.second = second
        self.third = third

    def __repr__(self):
        return f"🔒 {self.first}-{self.second}-{self.third}"

    def __eq__(self, other):
        return self.first == other.first and self.second == other.second and self.third == other.third

    # * Rotates the first number of the lock +1 if up is True or -1 if down is False
    def rotateFirst(self, up):
        self.first = (self.first + 1) % 10 if up else (self.first - 1) % 10

    # * Rotates the second number of the lock +1 if up is True or -1 if down is False
    def rotateSecond(self, up):
        self.second = (self.second + 1) % 10 if up else (self.second - 1) % 10

    # * Rotates the third number of the lock +1 if up is True or -1 if down is False
    def rotateThird(self, up):
        self.third = (self.third + 1) % 10 if up else (self.third - 1) % 10
