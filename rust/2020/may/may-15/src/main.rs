// * Daily Coding Problem May 15 2020

// * [Easy] -- Stripe

// * Given an integer n, return the length of the longest consecutive run of 1s in its binary representation.

// ! Ex: 156 -> 3
use std::collections::HashSet;

fn longest_binary_ones_representation(num: u64) -> u64 {
    let binary_string = format!("{:b}", num);
    let mut longest_streak: u64 = 0;
    let mut current_streak: u64 = 0;
    for c in binary_string.chars() {
        if c == '1' {
            current_streak += 1;
            if current_streak > longest_streak {
                longest_streak = current_streak;
            }
        } else {
            current_streak = 0;
        }
    }

    return longest_streak;
}

fn word_to_morse(word: String) -> String {
    let morse_conversion: Vec<&str> = vec![
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
        "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--",
        "--..",
    ];
    let mut morse: String = String::from("");

    for c in word.chars() {
        let char_index = "abcdefghijklmnopqrstuvwxyz".find(c).unwrap() as usize;
        morse.push_str(morse_conversion[char_index]);
    }
    return morse;
}

fn unique_morse_representations(words: Vec<String>) -> i32 {
    let mut uniques = HashSet::new();

    for morse_word in words.into_iter().map(|word| word_to_morse(word)) {
        if !uniques.contains(&morse_word) {
            uniques.insert(morse_word.to_string());
        }
    }
    return uniques.len() as i32;
}

#[test]
fn test_word_to_morse_1() {
    assert_eq!(word_to_morse(String::from("gin")), "--...-.");
}

#[test]
fn test_word_to_morse_2() {
    assert_eq!(word_to_morse(String::from("zen")), "--...-.");
}

#[test]
fn test_unique_morse_representations() {
    assert_eq!(
        unique_morse_representations(vec![
            String::from("gin"),
            String::from("zen"),
            String::from("gig"),
            String::from("msg")
        ]),
        2
    );
}

#[test]
fn test_longest_binary_ones_representation_1() {
    assert_eq!(longest_binary_ones_representation(156), 3);
}

#[test]
fn test_longest_binary_ones_representation_2() {
    assert_eq!(longest_binary_ones_representation(255), 8);
}

#[test]
fn test_longest_binary_ones_representation_3() {
    assert_eq!(longest_binary_ones_representation(256), 1);
}

fn main() {
    println!(
        "Longest streak of ones in {} binary: {:#b} --> {}",
        256,
        256,
        longest_binary_ones_representation(256)
    );
}
