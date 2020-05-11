// * Daily Coding Problem Feb 2nd 2020

// * [Hard] -- Google

// * Given a word W and a string S, find all starting indices in S which are anagrams of W.

// ! Ex: W = "ab", S = "abxaba" -> [0, 3, 4] (since the string ab appears at index 0 and 3, and the anagram ba occurs at index 4)

use std::collections::HashMap;

// * Returns a vector of indices representing all the locations that an
// * anagram of the string needle appears in the string haystack
fn find_all_anagrams(needle: &str, haystack: &str) -> Vec<usize> {
    let mut result = Vec::new();
    // * Loop over the haystack.
    for (i, _) in haystack.chars().enumerate() {
        if i > haystack.len() - needle.len() {
            // * Not possible to find another needle at this point since there are
            // * fewer than needle.len() many characters remainning in the haystack.
            break;
        }

        // * Grab a needle sized slice starting at i and add it to our result if it is an anagram of needle
        let potential_anagram = &haystack[i..i + needle.len()];
        if are_anagrams(needle, potential_anagram) {
            result.push(i);
        }
    }
    return result;
}


// * Recursive version of find_all_anagrams
fn find_all_anagrams_rec(needle: &str, haystack: &str) -> Vec<usize> {
    find_all_anagrams_rec_helper(needle, haystack, Vec::new(), 0)
}

fn find_all_anagrams_rec_helper(needle: &str, haystack: &str, mut acc: Vec<usize>, idx: usize) -> Vec<usize> {

    if idx > haystack.len() - needle.len() {
        return acc;
    }

    let potential_anagram = &haystack[idx..idx + needle.len()];
    if are_anagrams(needle, potential_anagram) {
        acc.push(idx);
        return find_all_anagrams_rec_helper(needle, haystack, acc, idx + 1);
    } else {
        return find_all_anagrams_rec_helper(needle, haystack, acc, idx + 1);
    }
}

// * Checks if two strings are anagrams of each other
fn are_anagrams(word: &str, other: &str) -> bool {
    let word_counts1 = letter_counts(word);
    let word_counts2 = letter_counts(other);
    word_counts1 == word_counts2
}

// * Generates a hashmap that maps characters to their number of occurrences in word
fn letter_counts(word: &str) -> HashMap<char, u32> {
    let mut letter_counts = HashMap::<char, u32>::new();

    for (_, c) in word.chars().enumerate() {
        match letter_counts.get_mut(&c) {
            Some(v) => {
                *v += 1;
            }
            None => {
                letter_counts.insert(c, 1);
            }
        };
    }
    letter_counts
}

fn main() {
    let needle = "ab";
    let haystack = "abxaba";
    let result = find_all_anagrams(needle, haystack);
    let result2 = find_all_anagrams_rec(needle, haystack);
    println!(
        "Iter: Anagrams of {} appear at indexes {:?} in the string {}\nRecursive result: {:?}",
        needle, result, haystack, result2
    );
}

#[test]
fn test_find_all_anagrams1() {
    let needle = "ab";
    let haystack = "abxaba";
    let result = find_all_anagrams(needle, haystack);
    assert_eq!(result, vec![0, 3, 4]);
}

#[test]
fn test_find_all_anagrams2() {
    let needle = "mil";
    let haystack = "apoilmiloopmil";
    let result = find_all_anagrams(needle, haystack);
    assert_eq!(result, vec![3, 4, 5, 11]);
}

#[test]
fn test_find_all_anagrams_rec1() {
    let needle = "ab";
    let haystack = "abxaba";
    let result = find_all_anagrams_rec(needle, haystack);
    assert_eq!(result, vec![0, 3, 4]);
}

#[test]
fn test_find_all_anagrams_rec2() {
    let needle = "mil";
    let haystack = "apoilmiloopmil";
    let result = find_all_anagrams_rec(needle, haystack);
    assert_eq!(result, vec![3, 4, 5, 11]);
}

