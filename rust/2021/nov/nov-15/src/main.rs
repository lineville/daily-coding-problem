// * Daily Coding Problem November 15 2021

// * [Easy] -- Slack

// You are given a string formed by concatenating several words 
// corresponding to the integers zero through nine and then anagramming.

// For example, the input could be 'niesevehrtfeev', which is an 
// anagram of 'threefiveseven'. Note that there can be multiple instances of each integer.

// Given this string, return the original integers in sorted order. In the example above, this would be 357.
extern crate rand;

use rand::{thread_rng};
use std::collections::HashMap;

// 0 z e r o
// 1 o n e
// 2 t w o
// 3 t h r e e
// 4 f o u r
// 5 f i v e
// 6 s i x
// 7 s e v e n
// 8 e i g h t
// 9 n i n e

// letters w multiple options: e, o, r, i, s, t, n, v, h, f
// dead giveaways: w, x, g, u, z

fn unscramble(anagram: &str) -> u32 {
    let mut result = 0;
    let mut letter_counts = HashMap::<char, usize>::new();

    for c in anagram.chars() {
        let count = letter_counts.entry(c).or_insert(0);
        *count += 1;
    }

    for (l, count) in letter_counts.iter().enumerate() {
        println!("{} {:?}", l, count);
    }

    return result;
}


fn digit_to_string(digit: char) -> String {
    let mut letter_spellings = HashMap::<char, &str>::new();
    letter_spellings.insert('0', "zero");
    letter_spellings.insert('1', "one");
    letter_spellings.insert('2', "two");
    letter_spellings.insert('3', "three");
    letter_spellings.insert('4', "four");
    letter_spellings.insert('5', "five");
    letter_spellings.insert('6', "six");
    letter_spellings.insert('7', "seven");
    letter_spellings.insert('8', "eight");
    letter_spellings.insert('9', "nine");

    return letter_spellings.get(&digit).unwrap().to_string();
}

fn scramble(num : u32) -> String {
    let mut result = String::new();


    let digits = num.to_string().chars().collect::<Vec<char>>();
    for d in digits {
        result.push_str(&digit_to_string(d));
    }

    return str_shuffled(result);
}

fn str_shuffled(s: String) -> String {
    let mut chars = s.chars().collect::<Vec<char>>();
    let mut rng = thread_rng();
    rng.
    rng.shuffle(rng);
    chars.iter().map(|x| *x).collect::<String>()
}

fn main() {
    let num = 357;
    println!("{}", scramble(num));

    let anagram = "niesevehrtfeev";
    // println!("{}", unscramble(anagram));
}

#[test]
fn test_unscramble() {
    assert_eq!(unscramble("niesevehrtfeev"), 357);
}
