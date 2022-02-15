# * Daily Coding Problem Februray 15 2022

# * [Medium] -- Microsoft

# Given a string and a pattern, find the starting indices of all occurrences of the pattern in the string.
#  For example, given the string "abracadabra" and the pattern "abr", you should return [0, 7].

def starting_indices(str, pattern)
  indices = []

  str.each_char.with_index do |c, i|
    break if i >= str.length - pattern.length
    indices.push(i) if str[i..i + pattern.length - 1] == pattern
  end

  return indices
end

def main
  str = "abracadabra"
  pattern = "abr"
  puts "Finding occurrences of #{pattern} in #{str}"
  puts starting_indices(str, pattern).to_s
end

# main
