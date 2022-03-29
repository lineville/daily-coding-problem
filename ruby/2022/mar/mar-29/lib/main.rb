# frozen_string_literal: false

# * Daily Coding Problem March 29 2022

# * [Hard] -- Google

# Given a string, split it into as few strings as possible such that each string is a palindrome.

# Ex: racecarannakayak -> ["racecar", "anna", "kayak"]
# Ex: abc -> ["a", "b", "c"]

def palindromes(str)
  result = []
  left = 0
  right = str.length - 1
  while str.length.positive?
    range = (left..right)
    if palindrome?(str[range])
      add_to_result(str, result, range)
      left = 0
      right = str.length - 1
    else
      right -= 1
    end
  end
  result
end

def add_to_result(str, result, range)
  result << str[range]
  str.slice!(range)
end

def palindrome?(str)
  str == str.reverse
end
