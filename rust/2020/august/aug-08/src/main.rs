// * Daily Coding Problem August 8th 2020

// * [Medium] -- Google

fn longest_two_apple_stretch(apples: &[usize]) -> usize {
    let n = apples.len();
    let k = 2;
    let mut freq = vec![0; n];

    let mut start = 0;
    let mut end = 0;
    let mut now = 0;
    let mut l = 0;

    for i in 0..n {
        freq[apples[i]] += 1;

        if freq[apples[i]] == 1 {
            now += 1;
        }

        while now > k {
            freq[apples[l]] -= 1;

            if freq[apples[l]] == 0 {
                now -= 1;
            }
            l += 1;
        }

        if i - l + 1 >= end - start + 1 {
            end = i;
            start = l;
        }
    }

    return end + 1 - start;
}

#[test]
fn test_longest_two_apple_stretch() {
    let apples = vec![2, 1, 2, 3, 3, 1, 3, 5];
    assert_eq!(longest_two_apple_stretch(&apples), 4);
}

fn main() {
    let apples = vec![2, 1, 2, 3, 3, 1, 3, 5];
    let longest_stretch = longest_two_apple_stretch(&apples);
    println!("Apples: {:?}", apples);
    println!("Longest stretch: {}", longest_stretch);
}
