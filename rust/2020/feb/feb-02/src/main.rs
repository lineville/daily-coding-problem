// * Daily Coding Problem Feb 2nd 2020

// * [Hard] -- Google

// * Given a word W and a string S, find all starting indices in S which are anagrams of W.

// ! Ex: W = "ab", S = "abxaba" -> [0, 3, 4]

use std::collections::HashMap;

// * Returns a vector of indices representing all the locations that an
// * anagram of the string needle appears in the string haystack
fn find_all_anagrams(needle : &str, haystack : &str) -> Vec<usize> {
    let mut vec = Vec::new();
    // * Loop over the haystack.
    for (i, _) in haystack.chars().enumerate() {
        if i > haystack.len() - needle.len() {
            break;
        }
        let potential_anagram = &haystack[i..i + needle.len()];
        if are_anagrams(needle, potential_anagram) {
            vec.push(i);
        }
    }
    vec
}

// * Checks if two strings are anagrams of each other
fn are_anagrams(word : &str, other : &str) -> bool {
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

fn main() {
    let needle = "ab";
    let haystack = "abxaba";
    let result = find_all_anagrams(needle, haystack);
    println!("Anagrams of {} appear at indexes {:?} in the string {}", needle, result, haystack);
}
