// * Daily Coding Problem October 11 2020

// * [Easy] -- Twitter

// * A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees.
// ! For example, 16891 is strobogrammatic.

// * Create a program that finds all strobogrammatic numbers with N digits.

// * Returns all the strobogrammatic numbers with N digits
fn strobogrammatic_numbers(n: u32) -> Vec<u32> {
    let mut result = Vec::new();

    if n == 0 {
        return result;
    }

    if n == 1 {
        for i in 0..10 {
            if is_strobogrammatic(i) {
                result.push(i);
            }
        }
    }
    // 1 => 0..9
    // 2 => 10..100
    // 3 => 100..1000
    if n > 1 {
        let start_idx = 10u32.pow(n - 1);
        let end_idx = start_idx * 10;
        for i in start_idx..end_idx {
            if is_strobogrammatic(i) {
                result.push(i);
            }
        }
    }

    return result;
}

// * Checks if a number is strobogrammatic
fn is_strobogrammatic(n: u32) -> bool {
    // If it has a a 3, 4, 7 then false
    let digits = number_to_digits(n);
    let unflippable_digits = digits
        .iter()
        .filter(|d| vec![3, 4, 7].contains(&d))
        .collect::<Vec<_>>();
    if unflippable_digits.len() > 0 {
        return false;
    }
    // If the flipped number is same as the original
    n == flip(n)
}

// * Flips an entire number 180 degrees
fn flip(n: u32) -> u32 {
    let mut digits = number_to_digits(n);
    let mut front: usize = 0;
    let mut back: usize = digits.len() - 1;

    while front <= back {
        let temp = digits[front];
        digits[front] = invert(digits[back]);
        digits[back] = invert(temp);
        front += 1;
        back -= 1;
    }

    return digits
        .into_iter()
        .map(|c| c.to_string())
        .collect::<String>()
        .parse()
        .unwrap();
}

// * Returns the flipped representation or itself if not possible
fn invert(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        2 => 5,
        5 => 2,
        6 => 9,
        8 => 8,
        9 => 6,
        _ => n,
    }
}

// * Converts num to a vector of digits
fn number_to_digits(n: u32) -> Vec<u32> {
    n.to_string()
        .chars()
        .map(|c| c.to_digit(10).unwrap())
        .collect()
}

fn main() {
    let n = 3;
    let result = strobogrammatic_numbers(n);
    println!("Strogogrammatic numbers with {} digits : {:?}", n, result);
}

// ____________________________TESTS_______________________________

#[test]
fn test_strobogrammatic_numbers_2() {
    assert_eq!(strobogrammatic_numbers(2), vec![11, 25, 52, 69, 88, 96])
}

#[test]
fn test_strobogrammatic_numbers_3() {
    assert_eq!(
        strobogrammatic_numbers(3),
        vec![
            101, 111, 181, 205, 215, 285, 502, 512, 582, 609, 619, 689, 808, 818, 888, 906, 916,
            986
        ]
    )
}

#[test]
fn test_strobogrammatic_numbers_4() {
    assert_eq!(
        strobogrammatic_numbers(4),
        vec![
            1001, 1111, 1251, 1521, 1691, 1881, 1961, 2005, 2115, 2255, 2525, 2695, 2885, 2965,
            5002, 5112, 5252, 5522, 5692, 5882, 5962, 6009, 6119, 6259, 6529, 6699, 6889, 6969,
            8008, 8118, 8258, 8528, 8698, 8888, 8968, 9006, 9116, 9256, 9526, 9696, 9886, 9966
        ]
    )
}

#[test]
fn test_strobogrammatic_numbers_5() {
    assert_eq!(
        strobogrammatic_numbers(5),
        vec![
            10001, 10101, 10801, 11011, 11111, 11811, 12051, 12151, 12851, 15021, 15121, 15821,
            16091, 16191, 16891, 18081, 18181, 18881, 19061, 19161, 19861, 20005, 20105, 20805,
            21015, 21115, 21815, 22055, 22155, 22855, 25025, 25125, 25825, 26095, 26195, 26895,
            28085, 28185, 28885, 29065, 29165, 29865, 50002, 50102, 50802, 51012, 51112, 51812,
            52052, 52152, 52852, 55022, 55122, 55822, 56092, 56192, 56892, 58082, 58182, 58882,
            59062, 59162, 59862, 60009, 60109, 60809, 61019, 61119, 61819, 62059, 62159, 62859,
            65029, 65129, 65829, 66099, 66199, 66899, 68089, 68189, 68889, 69069, 69169, 69869,
            80008, 80108, 80808, 81018, 81118, 81818, 82058, 82158, 82858, 85028, 85128, 85828,
            86098, 86198, 86898, 88088, 88188, 88888, 89068, 89168, 89868, 90006, 90106, 90806,
            91016, 91116, 91816, 92056, 92156, 92856, 95026, 95126, 95826, 96096, 96196, 96896,
            98086, 98186, 98886, 99066, 99166, 99866
        ]
    );
}
