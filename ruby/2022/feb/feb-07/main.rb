# * Daily Coding Problem February 7th 2022

# * [Medium] -- Square

# Given a string and a set of characters, return the shortest substring containing
# all the characters in the set.

# For example, given the string "figehaeci" and the set of characters {a, e, i},
# you should return "aeci".

# If there is no substring containing all the characters in the set, return null.


require 'set'


# Given a word (string) and a set of allowed characters, return the shortest substring
def shortest_substring_containing_all_chars(word, chars)

  # Find the substring that contains all the characters in the set and is the shortest
  # If there is no substring containing all the characters in the set, return null

  # Time Complexity: O(n)
  # Space Complexity: O(n)

  if chars.length > word.length
    puts "The word #{word} is too short to contain all the characters in the set #{chars.to_s}"
    return nil
  end

  # TODO finish this  



end


# puts shortest_substring_containing_all_chars("fi", Set.new(["a", "e", "i"]))
puts main.shortest_substring_containing_all_chars("figehaeci", ["a", "e", "i"])
