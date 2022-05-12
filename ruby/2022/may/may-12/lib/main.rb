# frozen_string_literal: true

# * Daily Coding Problem May 12 2022

# * [Medium] -- LinkedIn

# Given a linked list of numbers and a pivot k, partition the linked list so
# that all nodes less than k come before nodes greater than or equal to k.

# For example, given the linked list 5 -> 1 -> 8 -> 0 -> 3 and k = 3,
# the solution could be 1 -> 0 -> 5 -> 8 -> 3.
require_relative 'linked_list'

def partition(head, k)
  current = head

  less = LinkedList.new
  more = LinkedList.new

  while current
    if current.value < k
      less.append(current.value)
    else
      more.append(current.value)
    end

    current = current.next
  end

  less.tail.next = more.head
  less.tail = more.tail

  less
end

def main
  list = LinkedList.new
  list.append(5)
  list.append(1)
  list.append(8)
  list.append(0)
  list.append(3)

  k = 3
  result = partition(list.head, k)
  puts list.to_s
  puts "k = #{k}"
  puts '--------------------------'
  puts result.to_s
end

main
