// * Daily Coding Problem Jan 31 2020

// * Given an unsigned 8-bit integer, swap its even and odd bits. 
// * The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

// ! Ex:  10101010 -> 01010101
// ! Ex: 11100010 -> 11010001
use bit_vec::BitVec;

// * Creates a bit vector from the byte array and destructively swaps even bits with the next bit
fn swap_bits(bits : &[u8]) -> BitVec {
    
    let mut bv = BitVec::from_bytes(bits);
    let mut index  = 0;
    // * Loop over all the bits 2 at a time, swapping the even indexed bits with odd indexed bits
    while index < bv.capacity() {
        let even_value = bv.get(index as usize);
        let odd_value = bv.get((index + 1) as usize);

        // * Since BitVec.get returns an option we use rusts pattern matching to unwrap values
        match (odd_value, even_value) {
            (Some(odd), Some(even)) => {
                bv.set((index + 1) as usize, even);
                bv.set(index as usize, odd);
            }
            (_, _) => break,
        }
        index += 2;
    }
    bv
}

#[test]
fn test_swap_bits1() {
    let expected = BitVec::from_bytes(&[0b01010101]);
    let result = swap_bits(&[0b10101010]);
    assert_eq!(expected, result);
}

#[test]
fn test_swap_bits2() {
    let expected = BitVec::from_bytes(&[0b11100010]);
    let result = swap_bits(&[0b11010001]);
    assert_eq!(expected, result);
}

fn main() {
    println!("Byte Swapper Program!");
    let bv = BitVec::from_bytes(&[0b10101010]);
    let result = swap_bits(&[0b10101010]);
    println!("input:  {:?}", bv);
    println!("output: {:?}", result);
}
