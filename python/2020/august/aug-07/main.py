
# * Daily Coding Problem August 7th 2020

# * [Medium] -- Amazon

# * At a popular bar, each customer has a set of favorite drinks, and will
# * happily accept any drink among this set. For example, in the following
# * situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

# * A lazy bartender working at this bar is trying to reduce his effort
# * by limiting the drink recipes he must memorize. Given a dictionary
# * input such as the one above, return the fewest number of drinks he
# * must learn in order to satisfy all customers.

# ! preferences = {
# !     0: [0, 1, 3, 6],
# !     1: [1, 4, 7],
# !     2: [2, 4, 7, 5],
# !     3: [3, 2, 5],
# !     4: [5, 8]
# ! }

# * For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.
import operator


# * Returns the minimum number of drinks needed to serve the people with these preferences
def drinks_to_learn(preferences):
    drink_occurrences = {}  # * drink -> occcurences accross preferences
    drinks_learned = {}  # * drink -> whether bartender has learned it thus far

    # * Create mapping from drinks to how many times that drink occurs in peoples preferences
    for person, drinks in preferences.items():
        for d in drinks:
            if d not in drink_occurrences:
                drink_occurrences[d] = 1
            else:
                drink_occurrences[d] = drink_occurrences[d] + 1

    # * Until we have learned at least one drink to satisfy every person
    # * Select the drink that occurs most, learn it and delete it from the occurrences map
    while not everyone_covered(drinks_learned, preferences):

        # * This selects next best drink to learn based on the drink with most occurence
        # * this could be even better if it was most occurrences across the preferences
        # * excluding those who have been satisfied by the current set of drinks learned
        best_choice = max(drink_occurrences,
                          key=lambda key: drink_occurrences[key])
        drinks_learned[best_choice] = True
        del drink_occurrences[best_choice]

    print(drinks_learned)
    return len(drinks_learned)


# * Checks whether all preferences are covered based on the drinks offered
def everyone_covered(drinks_offered, preferences):
    all_satisfied = True
    for person, drinks in preferences.items():
        satisfied = False
        for d in drinks:
            if d in drinks_offered:
                satisfied = True
        all_satisfied = all_satisfied and satisfied
        satisfied = False
    return all_satisfied


def test_drink_to_learn():
    drink_preferences = {}
    drink_preferences[0] = [0, 1, 3, 6]
    drink_preferences[1] = [1, 4, 7]
    drink_preferences[2] = [2, 4, 7, 5]
    drink_preferences[3] = [3, 2, 5]
    drink_preferences[4] = [5, 8]
    assert drinks_to_learn(drink_preferences) == 2


def test_drink_to_learn2():
    drink_preferences = {}
    drink_preferences[0] = [0, 3, 6]
    drink_preferences[1] = [1, 4, 7]
    drink_preferences[2] = [2, 4, 7, 5]
    drink_preferences[3] = [3, 2, 5]
    drink_preferences[4] = [5, 8]
    assert drinks_to_learn(drink_preferences) == 3


def main():
    drink_preferences = {}
    drink_preferences[0] = [0, 3, 6]
    drink_preferences[1] = [1, 4, 7]
    drink_preferences[2] = [2, 4, 7, 5]
    drink_preferences[3] = [3, 2, 5]
    drink_preferences[4] = [5, 8]
    print(drink_preferences)
    total = drinks_to_learn(drink_preferences)
    print(f"Bar tender only needs to learn {total} drinks to server everyone")


main()
