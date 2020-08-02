# * Daily Coding Problem August 2nd 2020

# * [Hard] - - Twitter

# * A teacher must divide a class of students into two teams to play dodgeball.
# * Unfortunately, not all the kids get along, and several refuse to be put on
# * the same team as that of their enemies. Given an adjacency list of students
# * and their enemies, write an algorithm that finds a satisfactory pair of
# * teams, or returns False if none exists.

# ! Ex: For these students the teams should be {0, 1, 4, 5} and {2, 3}

# ! students = {
# !     0: [3],
# !     1: [2],
# !     2: [1, 4],
# !     3: [0, 4, 5],
# !     4: [2, 3],
# !     5: [3]
# !}

# ! Ex 2: This should return False
# ! students = {
# !     0: [3],
# !     1: [2],
# !     2: [1, 3, 4],
# !     3: [0, 2, 4, 5],
# !     4: [2, 3],
# !     5: [3]
# !}

# Creates two teams from the students based on their enemies
def dodgeball_teams(students):
    first_team = set()
    second_team = set()
    for student, enemies in enumerate(students):
        if len(first_team) == 0 or student not in second_team:
            first_team.add(student)
            for enemy in enemies:
                second_team.add(enemy)
        elif len(second_team) == 0 or student not in first_team:
            second_team.add(student)
            for enemy in enemies:
                first_team.add(enemy)

    if len(first_team) + len(second_team) == len(students):
        return [first_team, second_team]
    else:
        return None


def test_dodgeball_teams():
    students = []
    students.append([3])
    students.append([2])
    students.append([1, 4])
    students.append([0, 4, 5])
    students.append([2, 3])
    students.append([3])
    assert dodgeball_teams(students) == [{0, 1, 4, 5}, {2, 3}]


def main():
    students = []
    students.append([3])
    students.append([2])
    students.append([1, 4])
    students.append([0, 4, 5])
    students.append([2, 3])
    students.append([3])
    print("Dodgeball teams --> ", dodgeball_teams(students))


main()
