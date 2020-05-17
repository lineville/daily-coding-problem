// * Daily Coding Problem May 17 2020

// * [Medium] -- Facebook

// * Convert a roman numeral string to the numeric representation

// ! Ex: XIV --> 14

fn roman_numeral_value(roman_numeral: &str) -> i32 {
    return roman::from(roman_numeral).unwrap();
}

#[test]
fn test_roman_numeral_value_1() {
    assert_eq!(roman_numeral_value("I"), 1);
}

#[test]
fn test_roman_numeral_value_4() {
    assert_eq!(roman_numeral_value("IV"), 4);
}

#[test]
fn test_roman_numeral_value_5() {
    assert_eq!(roman_numeral_value("V"), 5);
}

#[test]
fn test_roman_numeral_value_14() {
    assert_eq!(roman_numeral_value("XIV"), 14);
}


#[test]
fn test_roman_numeral_value_157() {
    assert_eq!(roman_numeral_value("CLVII"), 157);
}

fn main() {
    println!(
        "Roman numeral converter {} --> {}",
        "X",
        roman_numeral_value("X")
    );
}
