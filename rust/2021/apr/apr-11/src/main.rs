// * Daily Coding Problem April 11 2021

// * [Medium] -- Google

// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.

// The list is very long, so making more than one pass is prohibitively expensive.

use std::collections::LinkedList;

fn remove_nth_from_last_element(list: &mut LinkedList<u32>, k: usize) {
    // public ListNode removeNthFromEnd(ListNode head, int n) {
    //     ListNode dummy = new ListNode(0);
    //     dummy.next = head;
    //     ListNode first = dummy;
    //     ListNode second = dummy;
    //     // Advances first pointer so that the gap between first and second is n nodes apart
    //     for (int i = 1; i <= n + 1; i++) {
    //         first = first.next;
    //     }
    //     // Move first to the end, maintaining the gap
    //     while (first != null) {
    //         first = first.next;
    //         second = second.next;
    //     }
    //     second.next = second.next.next;
    //     return dummy.next;
    // }
}

fn main() {
    let mut list: LinkedList<u32> = LinkedList::new();
    list.push_back(1);
    list.push_back(2);
    list.push_back(3);
    list.push_back(4);
    list.push_back(5);
    println!("{:?}", list);
}
