// * Daily Coding Problem May 13 2020

// * [Easy] -- Dropbox

// * Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

// * Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

// * Recursive version
fn column_id_rec(column: u64) -> String {
    match column {
        1..=26 => number_to_letter(column - 1),
        _ => [number_to_letter((column - 1) % 26), column_id_rec(column - 26)].join("") 
    }
}

// * Iterative version
fn column_id_iter(column: u64) -> String {
    let mut result = String::from("");
    let mut curr_value = column;

    while curr_value > 26 {
        result.push_str(&number_to_letter((curr_value - 1) % 26));
        curr_value = curr_value - 26;
    }
    
    result.push_str(&number_to_letter(curr_value - 1));
    return result;
}

// * Helper function that maps a number 1..26 to A..Z (1 -> A, 2 -> B, ..., 26 -> Z)
fn number_to_letter(number: u64) -> String {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".chars().skip(number as usize).take(1).collect();
}


// * ----------------------------- Tests --------------------------------------

#[test]
fn test_column_id_1() {
    assert_eq!(column_id_rec(1), "A");
    assert_eq!(column_id_iter(1), "A");
}

#[test]
fn test_column_id_2() {
    assert_eq!(column_id_rec(26), "Z");
    assert_eq!(column_id_iter(26), "Z");
}


#[test]
fn test_column_id_3() {
    assert_eq!(column_id_rec(27), "AA");
    assert_eq!(column_id_iter(27), "AA");
}

#[test]
fn test_column_id_4() {
    assert_eq!(column_id_rec(51), "YY");
    assert_eq!(column_id_iter(51), "YY");
}


#[test]
fn test_column_id_5() {
    assert_eq!(column_id_rec(52), "ZZ");
    assert_eq!(column_id_iter(52), "ZZ");
}

#[test]
fn test_column_id_6() {
    assert_eq!(column_id_rec(100), "VVVV");
    assert_eq!(column_id_iter(100), "VVVV");
}

// * Executes each version of the function to print out columns A, B, ... ZZZZZZ
fn main() {
    for i in 1..157 {
        println!("Iterative: {} --> {}", i, column_id_iter(i));
    }

    println!("\n------------------------------------------------");

    for i in 1..157 {
        println!("Recursive: {} --> {}", i, column_id_rec(i));
    }
}
