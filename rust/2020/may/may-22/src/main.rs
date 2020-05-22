// * Daily Coding Problem May 22 2020

// * [Easy] -- Zillow

// * Let's define a "sevenish" number to be one which is either a power of 7, or the sum of unique powers of 7. 
// * The first few sevenish numbers are 1, 7, 8, 49, and so on. 
// * Create an algorithm to find the nth sevenish number.

fn nth_sevenish_number(n : u32) -> u32 {
    if n < 1 {
        return 0;
    }
    let mut sevens : u32 = 1;
    let mut index : u32 = 1;
    let mut sevenish_numbers : Vec<u32> = vec![1];

    while index < n {
        sevens *= 7;
        let length = sevenish_numbers.len();
        sevenish_numbers.push(sevens);
        index += 1;

        for i in 0..length {
            if index >= n {
                println!("Hit the break");
                break;
            }
            sevenish_numbers.push(sevenish_numbers[i] + sevens);
            index += 1;
        }
    }

    return sevenish_numbers[(n - 1) as usize];
}


#[test]
fn test_nth_sevenish_number_1() {
    assert_eq!(nth_sevenish_number(1), 1);
}


#[test]
fn test_nth_sevenish_number_2() {
    assert_eq!(nth_sevenish_number(2), 7);
}


#[test]
fn test_nth_sevenish_number_3() {
    assert_eq!(nth_sevenish_number(3), 8);
}


#[test]
fn test_nth_sevenish_number_4() {
    assert_eq!(nth_sevenish_number(4), 49);
}



fn main() {
    println!("The {}th sevenish number is {}", 4, nth_sevenish_number(4));
}
