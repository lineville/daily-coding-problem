# * Daily Coding Problem February 4th 2022

# * [Easy] -- Google

# Given an array of elements, return the length of the
# longest subarray where all its elements are distinct.

# For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest
#  subarray of distinct elements is [5, 2, 3, 4, 1].

class LongestUniqueSubarray
  def initialize(array)
    @array = array
  end

  def longest_subarray
    indexes = Hash.new
    result = 0
    
    j = 0
    for i in 0..@array.length - 1 do
        
        j = [indexes[@array[i]] != nil ? indexes[@array[i]] : 0, j].max
        
        result = [result, i - j + 1].max

        indexes[@array[i]] = i + 1
    end

    return result
  end
end

def main
  array = [5, 1, 3, 5, 2, 3, 4, 1]
  longest_subarray = LongestUniqueSubarray.new(array)
  puts longest_subarray.longest_subarray
end

main
