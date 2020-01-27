use std::collections::LinkedList;

fn main() {
    println!("Palindrome Doubly Linked List");
    let mut list: LinkedList<u32> = LinkedList::new();
    list.push_front(1);
    list.push_front(3);
    list.push_front(5);
    list.push_front(3);
    list.push_front(1);

    // * This creates an iterator from the linked list
    // * Loop indefinitely. If iter.next() is None it will break out.
    // * Print out the value if we got one.
    let mut iter = list.iter();
    loop {
        match iter.next() {
            Some(x) => {
                println!("{}", x);
            }
            None => break,
        }
    }

    let front = list.pop_front();
    println!("{:?}", Some(front));
    let passed: bool = is_palindrome(list);
    println!("{}", passed);
}

fn is_palindrome(mut linked_list: LinkedList<u32>) -> bool {
    let list_size: usize = linked_list.len();
    let mut elements_from_start: usize = 0;
    let mut front: Option<u32> = linked_list.pop_front();
    let mut back: Option<u32> = linked_list.pop_back();

    // * We stop when we are halfway to the end since we are updating
    // * front and back pointers. Integer division (5 / 2) == 2 handles the
    // * odd length case where we can ignore that middle number and return true
    while elements_from_start < list_size / 2 {
        if Some(front) != Some(back) {
            return false;
        }
        front = linked_list.pop_front();
        back = linked_list.pop_back();
        elements_from_start += 1;
    }

    return true;
}


// * Unit Tests! -- In rust it seems that UT are placed in same file
// * by convention when testing private functionality.
#[cfg(test)]
mod tests {

    use super::*;

    #[test]
    fn test_palindrome_linked_list1() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        list.push_front(3);
        list.push_front(5);
        list.push_front(3);
        list.push_front(1);
        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }

    #[test]
    fn test_palindrome_linked_list2() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        list.push_front(3);
        list.push_front(5);
        list.push_front(3);
        let result: bool = is_palindrome(list);
        assert_eq!(result, false);
    }

    #[test]
    fn test_palindrome_linked_list3() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }

    #[test]
    fn test_palindrome_linked_list4() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        list.push_front(1);
        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }

    #[test]
    fn test_palindrome_linked_list5() {
        let list: LinkedList<u32> = LinkedList::new();
        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }

    #[test]
    fn test_palindrome_linked_list6() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        list.push_front(2);
        list.push_front(3);
        list.push_front(4);
        list.push_front(5);
        list.push_front(4);
        list.push_front(3);
        list.push_front(2);
        list.push_front(1);

        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }

    #[test]
    fn test_palindrome_linked_list7() {
        let mut list: LinkedList<u32> = LinkedList::new();
        list.push_front(1);
        list.push_front(2);
        list.push_front(3);
        list.push_front(4);
        list.push_front(5);
        list.push_front(5);
        list.push_front(4);
        list.push_front(3);
        list.push_front(2);
        list.push_front(1);

        let result: bool = is_palindrome(list);
        assert_eq!(result, true);
    }
}
