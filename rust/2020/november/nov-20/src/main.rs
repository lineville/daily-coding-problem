// * Daily Coding Problem November 20 2020

// * [Easy] -- Twitter

// * A permutation can be specified by an array P, where P[i] represents the location
// * of the element at i in the permutation. For example, [2, 1, 0] represents the
// * permutation where elements at the index 0 and 2 are swapped.

// * Given an array and a permutation, apply the permutation to the array.
// ! Ex: ["a", "b", "c"] and the permutation [2, 1, 0], return ["c", "b", "a"].

fn _permute_iter<T>(list: &Vec<T>, permutation: &Vec<usize>) -> Vec<T>
where
    T: Copy,
{
    let mut result = Vec::new();

    for &permutation in permutation.iter() {
        result.push(list[permutation]);
    }

    return result;
}

fn permute_func<T>(list: &Vec<T>, permutation: &Vec<usize>) -> Vec<T>
where
    T: Copy,
{
    permutation.iter().map(|&val| list[val]).collect()
}

fn main() {
    let list = vec!['a', 'b', 'c'];
    let permutation = vec![2, 1, 0];
    let result = permute_func(&list, &permutation);

    println!(
        "List: {:?}\nPermutation: {:?}\nResult: {:?}",
        list, permutation, result
    );
}

// * _______________________TESTS_______________________

#[test]
fn test_permute_iter() {
    assert_eq!(
        _permute_iter(&vec!['a', 'b', 'c'], &vec![2, 1, 0]),
        vec!['c', 'b', 'a']
    );
}

#[test]
fn test_permute_func() {
    assert_eq!(
        permute_func(&vec!['a', 'b', 'c'], &vec![2, 1, 0]),
        vec!['c', 'b', 'a']
    );
}

#[test]
fn test_permute_iter_2() {
    assert_eq!(
        _permute_iter(&vec!["abc", "def", "ghi"], &vec![2, 1, 0]),
        vec!["ghi", "def", "abc"]
    );
}

#[test]
fn test_permute_func_2() {
    assert_eq!(
        permute_func(&vec!["abc", "def", "ghi"], &vec![2, 1, 0]),
        vec!["ghi", "def", "abc"]
    );
}
