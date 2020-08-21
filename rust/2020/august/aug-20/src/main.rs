// * Daily Coding Problem

// * [Easy] -- Pivotal

// * Write an algorithm that finds the total number of set bits in all integers between 1 and N.

fn set_bits(n: u32) -> u32 {
    let mut total_set_bits = 0;

    for i in 1..n {
        let binary_string = format!("{:b}", i);
        for bit in binary_string.chars() {
            if bit == '1' {
                total_set_bits += 1;
            }
        }
        println!("{}", binary_string);
    }

    return total_set_bits;
}

#[test]
fn test_set_bits() {
    assert_eq!(set_bits(10), 15);
}

fn main() {
    let n = 10;
    println!("Total set bits from 1 to {} --> {}", n, set_bits(n));
}
