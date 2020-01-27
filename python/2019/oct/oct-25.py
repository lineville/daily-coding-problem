import math
import pprint
import sys
import json

    
def loadDictionary(file):
    f = open(file, "r")
    words = []

    for line in f:
        word = line.strip()
        words.append(word)
    
    f.close()
    return words

words = loadDictionary("scrabble_words.txt")
# print(words)

def make_trie():
    root = {}
    for word in words:
        this_dict = root
        for letter in word:
            this_dict = this_dict.setdefault(letter, {})
        this_dict[None] = None
    return root

def prune(trie, lettersToPrune):
    for letter in lettersToPrune:
        if letter != ' ':
            del trie[letter]
    return trie


# checks if the trie contains the word
def in_trie(trie, word):
    this_dict = trie
    for letter in word:
        try:
            this_dict = this_dict[letter]
        except KeyError:
            return False
    else:
        return None in this_dict
    

# trie = make_trie()
def testTrie(trie):
    passed = True
    for word in words:
        if not in_trie(trie, word):
            passed = False
    return passed

def autoComplete(prefix):
    trie = make_trie()
    for letter in prefix:
        trie = trie[letter]
    return trie


def recursiveAutoComp(path, trie, options):
    for k, v in trie.iteritems():
        if isinstance(v, dict):
            # print(v) # bottoms out at { None: None}
            # print("\n\n\n")
            recursiveAutoComp(path + k , v, prefix)
        else:
            options.push(prefix + path)


def main(prefix):
    options = 
recursiveAutoComp("", autoComplete("DE"), "DE")


