// * Daily Coding Problem July 15 2020

// * [Hard] -- Facebook

// * Given a string consisting of parentheses, single digits, and positive and
// * negative signs, convert the string into a mathematical expression to obtain
// * the answer. Don't use eval or a similar built-in parser.

// ! Ex: "-1 + (2 + 3)" => 4

use std::fmt;

enum Token {
    LeftParen,
    RightParen,
    Digit(u8),
    Plus,
    Minus,
}

impl fmt::Debug for Token {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match *self {
            Token::LeftParen => write!(f, "("),
            Token::RightParen => write!(f, ")"),
            Token::Digit(d) => write!(f, "{}", d),
            Token::Plus => write!(f, "+"),
            Token::Minus => write!(f, "-"),
        }
    }
}

fn calculate(_expression: &str) -> i32 {
    // TODO Implement me
    return 0;
}

fn main() {
    let expression = "-1 + (2 + 3)";
    println!(
        "Calculating expression: {} ==> {}",
        expression,
        calculate(expression)
    );

    println!(
        "{:?}{:?} {:?} {:?}{:?} {:?} {:?}{:?}",
        Token::Minus,
        Token::Digit(1),
        Token::Plus,
        Token::LeftParen,
        Token::Digit(2),
        Token::Plus,
        Token::Digit(3),
        Token::RightParen
    )
}

// * ---------------------- TESTS --------------------------------

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calculator_1() {
        assert_eq!(calculate("-1 + (2 + 3)"), 4);
    }
}
