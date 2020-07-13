// * Daily Coding Problem July 4 2020

// * [Medium] -- Nest

// * Create a basic sentence checker that takes in a stream of characters and determines whether
// * they form valid sentences. If a sentence is valid, the program should print it out.

// * We can consider a sentence valid if it conforms to the following rules:

// * The sentence must start with a capital letter, followed by a lowercase letter or a space.
// * All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
// * There must be a single space between each word.
// * The sentence must end with a terminal mark immediately following a word.

fn valid_sentence(sentence: &String) -> bool {
    let separators = vec![',', ';', ':', ' '];
    let terminals = vec!['.', '?', '!', '‽'];

    for (i, c) in sentence.chars().enumerate() {
        // * First letter capitalized
        if i == 0 && c.is_ascii_lowercase() {
            println!("First letter needs to be capitalized");
            return false;
        }
        // * Second letter must be lowercase or space
        if i == 1 && c.is_ascii_uppercase() && c != ' ' {
            println!("Second letter needs to be lowercase or a space");
            return false;
        }

        // * No double spaces
        if c == ' ' && sentence.chars().nth(i - 1).unwrap() == ' ' {
            println!("No double spaces allowed!");
            return false;
        }

        // * Characters after first 2 must be lowercase, or separators or terminal
        if i > 1 && c.is_ascii_uppercase() && !separators.contains(&c) && !terminals.contains(&c) {
            println!(
                "All subsequent letters need to be lowercase, or a separator or terminal, {}",
                &c
            );
            return false;
        }

        // * Last character needs to be terminal and penultimate must be lowercase letter
        if i == sentence.len() - 1
            && (!terminals.contains(&c) || sentence.chars().nth(i - 1).unwrap() == ' ')
        {
            println!(
                "Last character must be separator (not preceded by a space) end was {}",
                c
            );
            return false;
        }
    }

    return true;
}

#[test]
fn test_valid_sentence_1() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this is a valid sentence.")),
        true
    );
}

#[test]
fn test_valid_sentence_2() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this is a BAD sentence.")),
        false
    );
}

#[test]
fn test_valid_sentence_3() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this is not a  sentence.")),
        false
    );
}

#[test]
fn test_valid_sentence_4() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this is not a sentence .")),
        false
    );
}

#[test]
fn test_valid_sentence_5() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this never ends")),
        false
    );
}

#[test]
fn test_valid_sentence_6() {
    assert_eq!(
        valid_sentence(&String::from("Hi there this one is fine!")),
        true
    );
}

#[test]
fn test_valid_sentence_7() {
    assert_eq!(valid_sentence(&String::from("all lower")), false);
}

fn main() {
    let sentence = String::from("Hi there this is a valid sentence.");
    println!("Sentence Checker");
    println!(
        "{} {}",
        sentence,
        if valid_sentence(&sentence) {
            "✅"
        } else {
            "❌"
        }
    );
}
