
# * Daily Coding Problem September 8th 2020

# * [Hard] -- Amazon

# * The stable marriage problem is defined as follows:

# * Suppose you have N men and N women, and each person has 
# * ranked their prospective opposite-sex partners in order of preference.

# * Write an algorithm that pairs the men and women together in such a way
# * that no two people of opposite sex would both rather be with each other
# * than with their current partners.


def main():

  guy_preferences = {
    'andrew': ['caroline', 'abigail', 'betty'],
    'bill': ['caroline', 'betty', 'abigail'],
    'chester': ['betty', 'caroline', 'abigail']
  }

  girl_preferences = {
    'abigail': ['andrew', 'bill', 'chester'],
    'betty': ['bill', 'andrew', 'chester'],
    'caroline': ['bill', 'chester', 'andrew']
  }
  print(guy_preferences)
  print(girl_preferences)

main()