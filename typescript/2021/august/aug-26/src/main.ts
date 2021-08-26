// * Daily Coding Problem August 26 2021

// * [Medium] -- Google

// You are given a set of synonyms, such as (big, large) and (eat, consume).
// Using this set, determine if two sentences with the same number of words
// are equivalent.

// For example, the following two sentences are equivalent:

// "He wants to eat food."
// "He wants to consume food."
// Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c):
// consider the case of (coach, bus) and (coach, teacher).

// Follow-up: what if we can assume that (a, b) and (a, c) do in fact imply (b, c)?

// Given a set of synonyms, determine if the two sentances are equivalent
// transitive flag indicates if we can assume that (a, b) and (a, c) do in fact imply (b, c)
export const areSentencesEquivalent = (
    synonyms: Set<[string, string]>,
    sentence1: string,
    sentence2: string,
    transitive: boolean = false
): boolean => {
    const words1 = sentence1.split(' ')
    const words2 = sentence2.split(' ')

    // Check if the sentences have the same number of words
    if (words1.length !== words2.length) {
        return false
    }

    // Construct a 2-way mapping of synonyms
    const wordMap: Map<string, string> = new Map()
    for (const [a, b] of synonyms) {
        wordMap.set(a, b)
        wordMap.set(b, a)
    }

    for (let i = 0; i < words1.length; i++) {
        if (words1[i] !== words2[i]) {
            // Words are not equal, check for possible synonym
            if (!transitive) {
                // Synonym transitive flag is not set -- check simple synonyms
                if (!simpleSynonyms(words1[i], words2[i], wordMap)) {
                    // Words are not synonyms
                    return false
                }
            } else {
                // Synonym transitive flag is set -- check transitive synonyms
                if (!transitiveSynonyms(words1[i], words2[i], wordMap)) {
                    // Words are not transitive synonyms
                    return false
                }
            }
        }
    }

    // All words were equal or synonyms
    return true
}

// Checks if the two words are synonyms, where transitive synonyms are not allowed
const simpleSynonyms = (
    word1: string,
    word2: string,
    wordMap: Map<string, string>
): boolean => {
    return wordMap.has(word1) && wordMap.get(word1) === word2
}

// Checks if the two words are synonyms, where transitive synonyms are allowed
const transitiveSynonyms = (
    word1: string,
    word2: string,
    wordMap: Map<string, string>,
    visited: Set<string> = new Set()
): boolean => {
    if (simpleSynonyms(word1, word2, wordMap)) {
        return true
    } else {
        const synonym = wordMap.get(word1)
        if (synonym && !visited.has(synonym)) {
            visited.add(word1)
            visited.add(synonym)
            return transitiveSynonyms(synonym, word2, wordMap, visited)
        } else {
            return false
        }
    }
}
