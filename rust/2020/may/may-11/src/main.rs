// * Daily Coding Problem May 11th 2020

// * [Easy] -- Apple

// * A Collatz sequence in mathematics can be defined as follows. Starting with any positive integer:

// * If n is even, the next number in the sequence is n / 2
// * If n is odd, the next number in the sequence is 3n + 1
// * It is conjectured that every such sequence eventually reaches the number 1. Test this conjecture.

// ! This conjecture remains unproven to this day!!

// ! Bonus: What input n <= 1000000 gives the longest sequence?

// * Expects a positive integer --> The last element of return vector should always be 1 based on conjecture.
fn collatz_sequence(mut num: u128) -> Vec<u128> {
    let mut result = Vec::new();
    while num != 1 {
        if num % 2 == 0 {
            num = num / 2;
        } else {
            num = 3 * num + 1;
        }
        result.push(num);
    }
    return result;
}

// * Finds n that produces largest collatz_sequence under max
// * If verbose flag is true, each sequence will be printed
fn longest_collatz_sequence(max: u128, verbose: bool) -> u128 {
    let mut longest = 0;
    let mut longest_input = 0;

    for i in 1..max {
        let sequence_length = collatz_sequence(i).len();
        if verbose {
            println!("i : {} --> sequence length: {}", i, sequence_length);
        } 
        if sequence_length > longest {
            longest_input = i;
            longest = sequence_length;
        }
    }
    return longest_input;
}


fn main() {
    let num: u128 = 1000000;
    println!("\nLongest Collatz Sequence for n <= {} : n = {}  --> sequence length: {}", num, longest_collatz_sequence(num, true), collatz_sequence(longest_collatz_sequence(num, true)).len());
}


#[test]
fn test_collatz_sequence1() {
    let result = collatz_sequence(100);
    assert_eq!(result, vec![50, 25, 76, 38, 19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
}

#[test]
fn test_collatz_sequence2() {
    let result = collatz_sequence(1000);
    assert_eq!(result, vec![500, 250, 125, 376, 188, 94, 47, 142, 71, 214, 107, 322, 161, 484, 242, 121, 364, 182, 91, 274, 137, 412, 206, 103, 310, 155, 466, 233, 700, 350, 175, 526, 263, 790, 395, 1186, 593, 1780, 890, 445, 1336, 668, 334, 167, 502, 251, 754, 377, 1132, 566, 283, 850, 425, 1276, 638, 319, 958, 479, 1438, 719, 2158, 1079, 3238, 1619, 4858, 2429, 7288, 3644, 1822, 911, 2734, 1367, 4102, 2051, 6154, 3077, 9232, 4616, 2308, 1154, 577, 1732, 866, 433, 1300, 650, 325, 976, 488, 244, 122, 61, 184, 92, 46, 23, 70, 35, 106, 53, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
}

#[test]
fn test_longest_collatz_sequence() {
    let result = longest_collatz_sequence(1000000, false);
    assert_eq!(result, 837799);
}


