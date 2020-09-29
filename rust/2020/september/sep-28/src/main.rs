// * Daily Coding Problem September 28 2020

// * [Hard] -- Grammerly

// * Soundex is an algorithm used to categorize phonetically, such that
// * two names that sound alike but are spelled differently have the same representation.

// * Soundex maps every name to a string consisting of one letter and three numbers, like M460.

// One version of the algorithm is as follows:

// * 1. Remove consecutive consonants with the same sound (for example, change ck -> c).
// ! This is the only actual hard part how do we know what constants have same sound???
// Steps 2 - 5 are easy
// * 2. Keep the first letter. The remaining steps only apply to the rest of the string.
// * 3. Remove all vowels, including y, w, and h
// * 4. Replace all consonants with the following digits:
//        - b, f, p, v → 1
//        - c, g, j, k, q, s, x, z → 2
//        - d, t → 3
//        - l → 4
//        - m, n → 5
//        - r → 6
// * 5. If you don't have three numbers yet, append zeros until you do. Keep the first three numbers.

// * Using this scheme, Jackson and Jaxen both map to J250.

// * Implement Soundex.

use std::collections::HashMap;

fn soundex_mapping(sound: &str) -> String {
    let result = remove_consecutive_similar_sounding_consonants(sound);
    let first_letter = result.chars().nth(0).unwrap();
    // * Shaddowing result with new type
    let mut result: String = result.chars().skip(1).collect::<String>().to_lowercase();
    result = remove_vowels_and_pseudovowels(result);
    result = replace_consonants_with_digits(result);
    result = pad_zeroes(result);
    result.insert(0, first_letter);
    return result;
}

// ! This is the key to it all we need a way to map characters to similar characters
fn remove_consecutive_similar_sounding_consonants(sound: &str) -> String {
    // * Naively creating a mapping based on given example and some intuition
    // * Map 2 chars --> 1 char that can replace both and is same sound
    let mut similar_sounds = HashMap::<(char, char), char>::new();
    similar_sounds.insert(('c', 'k'), 'c');
    similar_sounds.insert(('c', 's'), 'x');
    // * There are probably lots more ... maybe should be enumerated and read from file

    // let mut no_more_consecutive_consonants = false;
    let mut result = String::from("");
    // while !no_more_consecutive_consonants {
    for (i, c) in sound.chars().enumerate() {
        // SKIP FIRST ITERATION
        if i == 0 {
            continue;
        };

        let next_char = sound.chars().nth(i - 1).unwrap();

        // Try to see if our mapping has a replacement for this pair
        match similar_sounds.get(&(c, next_char)) {
            None => {
                result.push(c);
            }
            Some(l) => {
                result.push(*l);
            }
        }
    }
    return result;
}

fn remove_vowels_and_pseudovowels(sound: String) -> String {
    let vowels_and_pseudovowels = vec!['a', 'e', 'i', 'o', 'u', 'y', 'w', 'h'];
    sound
        .chars()
        .filter(|c| !vowels_and_pseudovowels.contains(c))
        .collect()
}

fn replace_consonants_with_digits(sound: String) -> String {
    let mut consonants_values = HashMap::<char, u32>::new();
    consonants_values.insert('b', 1);
    consonants_values.insert('f', 1);
    consonants_values.insert('p', 1);
    consonants_values.insert('v', 1);
    consonants_values.insert('c', 2);
    consonants_values.insert('g', 2);
    consonants_values.insert('j', 2);
    consonants_values.insert('k', 2);
    consonants_values.insert('q', 2);
    consonants_values.insert('s', 2);
    consonants_values.insert('x', 2);
    consonants_values.insert('z', 2);
    consonants_values.insert('d', 3);
    consonants_values.insert('t', 3);
    consonants_values.insert('l', 4);
    consonants_values.insert('m', 5);
    consonants_values.insert('n', 5);
    consonants_values.insert('r', 6);

    let mut result = String::new();
    for c in sound.chars() {
        result.push(num_to_char(*consonants_values.get(&c).unwrap()));
    }

    return result;
}

fn num_to_char(num: u32) -> char {
    num.to_string().chars().nth(0).unwrap()
}

fn pad_zeroes(sound: String) -> String {
    let mut result = sound.clone();
    while result.len() < 3 {
        result.push('0');
    }
    return result;
}

fn main() {
    println!("Soundex Algorithm!");
    let mut name = "Jackson";
    let result = soundex_mapping(name);
    println!("{} --> {}", name, result);

    name = "Jaxen";
    let result = soundex_mapping(name);
    println!("{} --> {}", name, result);
}

// * ________________________TESTS___________________________

#[test]
fn test_remove_consecutive_similar_sounding_consonants() {
    assert_eq!(remove_consecutive_similar_sounding_consonants("ck"), "c");
}

#[test]
fn test_remove_vowels_and_pseudovowels() {
    assert_eq!(
        remove_vowels_and_pseudovowels(String::from("Jacksony")),
        "Jcksn"
    );
}

#[test]
fn test_replace_consonants_with_digits_1() {
    assert_eq!(replace_consonants_with_digits(String::from("cksn")), "2225");
}

#[test]
fn test_replace_consonants_with_digits_2() {
    assert_eq!(replace_consonants_with_digits(String::from("xn")), "25");
}

#[test]
fn test_pad_zeroes() {
    assert_eq!(pad_zeroes(String::from("12")), "120");
}

#[test]
fn test_soundex_mapping_1() {
    assert_eq!(soundex_mapping("Jackson"), "J250");
}

#[test]
fn test_soundex_mapping_2() {
    assert_eq!(soundex_mapping("Jaxen"), "J250");
}
