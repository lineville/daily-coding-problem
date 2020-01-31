


// * Given an unsigned 8-bit integer, swap its even and odd bits. 
// * The 1st and 2nd bit should be swapped, the 3rd and 4th bit should be swapped, and so on.

// ! Ex:  10101010 -> 01010101
// ! Ex: 11100010 -> 11010001


fn swap_bits(bits : u8) -> u8 {

}

fn main() {
    println!("Hello, world!");
    let mut byte: u8 = 0b0000_0000;

    byte |= 0b0000_1000; // Set a bit
    println!("0b{:08b}", byte);

    byte &= 0b1111_0111; // Unset a bit
    println!("0b{:08b}", byte);

    byte ^= 0b0000_1000; // Toggle a bit
    println!("0b{:08b}", byte);
}
