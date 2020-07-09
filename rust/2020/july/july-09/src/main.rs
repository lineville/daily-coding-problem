// * Daily Coding Problem July 9 2020

// * [Medium] -- Indeed

// * Given a 32-bit positive integer N, determine whether it is a power
// * of four in faster than O(log N) time.

// * Time: O(N / 4)
fn is_power_of_four(n: u32) -> bool {
    if n == 0 {
        return false;
    }

    if n == 1 {
        return true;
    }

    if n % 4 != 0 {
        return false;
    }

    return is_power_of_four(n / 4);
}

#[test]
fn test_is_power_of_four_1() {
    assert_eq!(is_power_of_four(1024), true);
}

#[test]
fn test_is_power_of_four_2() {
    assert_eq!(is_power_of_four(1025), false);
}

fn main() {
    println!("Is {} a power of four --> {}", 16, is_power_of_four(16));
    println!("Is {} a power of four --> {}", 15, is_power_of_four(15));
    println!("Is {} a power of four --> {}", 1024, is_power_of_four(1024));
    println!("Is {} a power of four --> {}", 1025, is_power_of_four(1025));
}
