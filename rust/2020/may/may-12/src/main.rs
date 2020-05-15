// * Daily Coding Problem May 12 2020

// * [Medium] -- Microsoft

// * Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string. 

// ! Ex: "abracadabra" and the pattern "abr" --> [0, 7]
// #![feature(exclusive_range_pattern)]
#![allow(dead_code)]

fn pattern_indices(input: &str, pattern: &str) -> Vec<usize> {
    let mut indices = Vec::new();

    for (i, _) in input.chars().enumerate() {
        if i <= input.len() - pattern.len() {
            let possible_match = input.get(i..i + pattern.len());
            // * It remains unclear to me why I need to use Some to compare two &str for equality
            if possible_match == Some(pattern) {
                indices.push(i);
            }
        }
    }
    return indices;
}

#[test]
fn test_pattern_indices() {
    let result = pattern_indices("abracadabra", "abr");
    assert_eq!(result, vec![0, 7]);
}

// * Convert a non-negative integer to its english words representation.
fn number_to_english_words(num: u64) -> String {
    // * Opted to explicitly enumerate all the cases that can fit in u64 since it turns out there really aren't too many when grouped properly and max is 2^64.
    match num {
        0..=99 => sub_hundred_to_english_word(num),
        
        100..=999 => [sub_hundred_to_english_word(num / 100), String::from("Hundred"), number_to_english_words(num % 100)].join(" "),
        1000..=99999 => [sub_hundred_to_english_word(num / 1000), String::from("Thousand"), number_to_english_words(num % 1000)].join(" "),
        
        100000..=999999 => [sub_hundred_to_english_word(num / 100000), String::from("Hundred"), number_to_english_words(num % 100000)].join(" "),
        1000000..=99999999 => [sub_hundred_to_english_word(num / 1000000), String::from("Million"), number_to_english_words(num % 1000000)].join(" "),
        
        100000000..=999999999 => [sub_hundred_to_english_word(num / 100000000), String::from("Hundred"), number_to_english_words(num % 100000000)].join(" "),
        1000000000..=99999999999 => [sub_hundred_to_english_word(num / 1000000000), String::from("Billion"), number_to_english_words(num % 1000000000)].join(" "),
        
        100000000000..=999999999999 => [sub_hundred_to_english_word(num / 100000000000), String::from("Hundred"), number_to_english_words(num % 100000000000)].join(" "),
        1000000000000..=99999999999999 => [sub_hundred_to_english_word(num / 1000000000000), String::from("Trillion"), number_to_english_words(num % 1000000000000)].join(" "),
        
        100000000000000..=999999999999999 => [sub_hundred_to_english_word(num / 100000000000000), String::from("Hundred"), number_to_english_words(num % 100000000000000)].join(" "),
        1000000000000000..=99999999999999999 => [sub_hundred_to_english_word(num / 1000000000000000), String::from("Quadrillion"), number_to_english_words(num % 1000000000000000)].join(" "),
        
        100000000000000000..=999999999999999999 => [sub_hundred_to_english_word(num / 100000000000000000), String::from("Hundred"), number_to_english_words(num % 100000000000000000)].join(" "),
        1000000000000000000..=std::u64::MAX => [sub_hundred_to_english_word(num / 1000000000000000000), String::from("Quintillion"), number_to_english_words(num % 1000000000000000000)].join(" "),
    }
}

fn digit_to_english_word(num: u64) -> String {
    match num {
        1 => String::from("One"),
        2 => String::from("Two"),
        3 => String::from("Three"),
        4 => String::from("Four"),
        5 => String::from("Five"),
        6 => String::from("Six"),
        7 => String::from("Seven"),
        8 => String::from("Eight"),
        9 => String::from("Nine"),
        _ => String::from(""),
    }
}

fn teen_to_english_word(num: u64) -> String {
    match num {
        10 => String::from("Ten"),
        11 => String::from("Eleven"),
        12 => String::from("Twelve"),
        13 => String::from("Thirteen"),
        14 => String::from("Fourteen"),
        15 => String::from("Fifteen"),
        16 => String::from("Sixteen"),
        17 => String::from("Seventeen"),
        18 => String::from("Eighteen"),
        19 => String::from("Nineteen"),
        _ => String::from(""),
    }
}

fn sub_hundred_to_english_word(num: u64) -> String {
    match num {
        1..=9 => digit_to_english_word(num),
        10..=19 => teen_to_english_word(num),
        20..=29 => [String::from("Twenty"), digit_to_english_word(num % 10)].join(" "),
        30..=39 => [String::from("Thirty"), digit_to_english_word(num % 10)].join(" "),
        40..=49 => [String::from("Fourty"), digit_to_english_word(num % 10)].join(" "),
        50..=59 => [String::from("Fifty"), digit_to_english_word(num % 10)].join(" "),
        60..=69 => [String::from("Sixty"), digit_to_english_word(num % 10)].join(" "),
        70..=79 => [String::from("Seventy"),  digit_to_english_word(num % 10)].join(" "),
        80..=89 => [String::from("Eighty"), digit_to_english_word(num % 10)].join(" "),
        90..=99 => [String::from("Ninety"), digit_to_english_word(num % 10)].join(" "),
        _ => String::from("")
    }
}

#[test]
fn test_number_to_english_words1() {
  let result = number_to_english_words(5);
  assert_eq!(result, String::from("Five"));
}

#[test]
fn test_number_to_english_words2() {
  let result = number_to_english_words(12);
  assert_eq!(result, String::from("Twelve"));
}

#[test]
fn test_number_to_english_words3() {
  let result = number_to_english_words(789);
  assert_eq!(result, String::from("Seven Hundred Eighty Nine"));
}

#[test]
fn test_number_to_english_words4() {
  let result = number_to_english_words(12345);
  assert_eq!(result, String::from("Twelve Thousand Three Hundred Fourty Five"));
}

#[test]
fn test_number_to_english_words5() {
  let result = number_to_english_words(23456);
  assert_eq!(result, String::from("Twenty Three Thousand Four Hundred Fifty Six"));
}

#[test]
fn test_number_to_english_words6() {
  let result = number_to_english_words(123456);
  assert_eq!(result, String::from("One Hundred Twenty Three Thousand Four Hundred Fifty Six"));
}

#[test]
fn test_number_to_english_words7() {
  let result = number_to_english_words(1234567);
  assert_eq!(result, String::from("One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"));
}

#[test]
fn test_number_to_english_words8() {
    let result = number_to_english_words(12345678);
    assert_eq!(result, String::from("Twelve Million Three Hundred Fourty Five Thousand Six Hundred Seventy Eight"));
}

#[test]
fn test_number_to_english_words9() {
  let result = number_to_english_words(123456789);
  assert_eq!(result, String::from("One Hundred Twenty Three Million Four Hundred Fifty Six Thousand Seven Hundred Eighty Nine"));
}

#[test]
fn test_number_to_english_words10() {
  let result = number_to_english_words(1234567891);
  assert_eq!(result, String::from("One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words11() {
  let result = number_to_english_words(11234567891);
  assert_eq!(result, String::from("Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words12() {
  let result = number_to_english_words(111234567891);
  assert_eq!(result, String::from("One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words13() {
  let result = number_to_english_words(1111234567891);
  assert_eq!(result, String::from("One Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}

#[test]
fn test_number_to_english_words14() {
  let result = number_to_english_words(11111234567891);
  assert_eq!(result, String::from("Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words15() {
  let result = number_to_english_words(111111234567891);
  assert_eq!(result, String::from("One Hundred Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words16() {
  let result = number_to_english_words(1111111234567891);
  assert_eq!(result, String::from("One Quadrillion One Hundred Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words17() {
  let result = number_to_english_words(11111111234567891);
  assert_eq!(result, String::from("Eleven Quadrillion One Hundred Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words18() {
  let result = number_to_english_words(111111111234567891);
  assert_eq!(result, String::from("One Hundred Eleven Quadrillion One Hundred Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words19() {
  let result = number_to_english_words(1111111111234567891);
  assert_eq!(result, String::from("One Quintillion One Hundred Eleven Quadrillion One Hundred Eleven Trillion One Hundred Eleven Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"));
}


#[test]
fn test_number_to_english_words20() {
  let result = number_to_english_words(std::u64::MAX);
  assert_eq!(result, String::from("Eighteen Quintillion Four Hundred Fourty Six Quadrillion Seven Hundred Fourty Four Trillion Seventy Three Billion Seven Hundred Nine Million Five Hundred Fifty One Thousand Six Hundred Fifteen"));
}


fn main() {}





  
