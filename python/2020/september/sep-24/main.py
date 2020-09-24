
# * Daily Coding Problem September 24 2020

# * [Medium] -- Google

# * You are given a set of synonyms, such as (big, large) and (eat, consume).
# * Using this set, determine if two sentences with the same number of words are equivalent.
from typing import Set, Tuple


def sentencesEqual(synonyms: Set[Tuple[str, str]], sentence1: str, sentence2: str) -> bool:
    words1 = sentence1.split(" ")
    words2 = sentence2.split(" ")

    for i, word in enumerate(words1):
        if word != words2[i] and not isSynonym(synonyms, word, words2[i]):
            return False

    return True


def isSynonym(synonyms: Set[Tuple[str, str]], word1: str, word2: str) -> bool:
    for syn in synonyms:
        if syn[0] == word1 and syn[1] == word2 or syn[1] == word1 and syn[0] == word2:
            return True
    return False


def main():
    sentence1 = "He wants to eat chow"
    sentence2 = "He desires to consume food"
    synonyms = set()
    synonyms.add(("food", "chow"))
    synonyms.add(("eat", "consume"))
    result = sentencesEqual(synonyms, sentence1, sentence2)
    print(sentence1)
    print(sentence2)
    print(result)


main()


# ___________________________TESTS_____________________________

def testSentencesEqual1():
    synonyms = set()
    synonyms.add(("food", "chow"))
    synonyms.add(("eat", "consume"))
    sentence1 = "He wants to eat food"
    sentence2 = "He wants to consume food"
    assert sentencesEqual(synonyms, sentence1, sentence2)


def testSentencesEqual2():
    synonyms = set()
    synonyms.add(("food", "chow"))
    synonyms.add(("eat", "consume"))
    sentence1 = "He wants to eat chow"
    sentence2 = "He wants to consume food"
    assert sentencesEqual(synonyms, sentence1, sentence2)


def testSentencesEqual3():
    synonyms = set()
    synonyms.add(("food", "chow"))
    synonyms.add(("eat", "consume"))
    sentence1 = "He wants to eat chow"
    sentence2 = "He desires to consume food"
    assert sentencesEqual(synonyms, sentence1, sentence2) == False
