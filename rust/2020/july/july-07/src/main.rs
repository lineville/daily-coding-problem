use std::fs::File;
use std::io::{self, BufRead};
use std::path::Path;
use stringsort::vecsort;
// * Daily Coding Problem July 7th 2020

// * [Easy] -- Pivotal

// * A step word is formed by taking a given word, adding a letter, and anagramming the result. 
// ! Ex: starting with the word "APPLE", you can add an "A" and anagram to get "APPEAL".

// * Given a dictionary of words and an input word, create a function that returns all valid step words.

fn step_words(word: &str, dictionary: Vec<String>) -> Vec<String> {
    let mut result = vec![];

    // * For each of the 26 possible letters that could be added to word
    // * Find all anagrams of that new word and add it to result vector
    const ALPHABET : &str = "abcdefghijklmnopqrstuvwxyz";
    for letter in ALPHABET.chars() {
        let mut new_word = String::from(word);
        new_word.push(letter);
        // * Go through entire dictionary and add any anagrams
        for dict_word in dictionary.iter() {
            if vecsort(&new_word) == vecsort(dict_word) {
                result.push(dict_word.clone());
            }
        }
    }

    return result;
}

// The output is wrapped in a Result to allow matching on errors
// Returns an Iterator to the Reader of the lines of the file.
fn read_lines<P>(filename: P) -> io::Result<io::Lines<io::BufReader<File>>> where P: AsRef<Path>, {
    let file = File::open(filename)?;
    Ok(io::BufReader::new(file).lines())
}

fn read_dictionary(filename: &str) -> Vec<String> {
    let mut words : Vec<String> = vec![];
    if let Ok(lines) = read_lines(filename) {
        for line in lines {
            if let Ok(ip) = line {
                words.push(ip);
            }
        }
    }
    return words;
}


#[test]
fn test_step_words_1() {
    let words =  read_dictionary("./words.txt");
    assert_eq!(step_words("apple", words).contains(&String::from("appeal")), true);
}

fn main() {
    let words =  read_dictionary("./words.txt");
    let word = "apple";
    println!("Step words of {}\n-----------------------\n{:?}", word, step_words(word, words));
}

