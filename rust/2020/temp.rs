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
    let separators = vec![',', ';', ':'];
    let terminals = vec!['.', '?', '!', '‽'];

    let first_letter_capitalized = sentence.chars().nth(0).unwrap().is_ascii_lowercase();
    if !first_letter_capitalized {
        println!("First letter needs to be capitalized");
        return false;
    }

    let second_letter = sentence.chars().nth(1).unwrap();
    if second_letter.is_ascii_uppercase() && second_letter != ' ' {
        println!("Second letter needs to be lowercase or a space");
        return false;
    }

    for (i, c) in sentence.chars().enumerate() {
        if i < 2 {
            continue;
        }

        if c.is_ascii_uppercase() || !separators.contains(&c) || !terminals.contains(&c) {
            println!("All subsequent letters need to be lowercase, or a separator or terminal");
            return false;
        }

        if c == ' ' && sentence.chars().nth(i - 1).unwrap() == ' ' {
            println!("No double spaces allowed");
            return false;
        }

        if i == sentence.len() - 1
            && (!separators.contains(&c) || sentence.chars().nth(i - 1).unwrap() == ' ')
        {
            println!("Last character must be separator (not preceded by a space)");
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
