# frozen_string_literal: true

# * Daily Coding Problem: Apr 1st 2022

# * [Hard] -- Uber

# Implement a 2D iterator class. It will be initialized with an array of arrays,
#  and should implement the following methods:

# next(): returns the next element in the array of arrays.
# If there are no more elements, raise an exception.
# has_next(): returns whether or not the iterator still has elements left.
# For example, given the input [[1, 2], [3], [], [4, 5, 6]],
# calling next() repeatedly should output 1, 2, 3, 4, 5, 6.

# Do not use flatten or otherwise clone the arrays. Some of the arrays can be empty.

# 2D Iterator
class TwoDimensionalIterator
  attr_accessor :arrays, :outer_index, :inner_index

  def initialize(arrays)
    @arrays = arrays
    @outer_index = 0
    @inner_index = 0
  end

  def next
    raise 'No more elements' unless has_next

    # Move to next inner array
    if inner_index == arrays[outer_index].length
      @inner_index = 0
      @outer_index += 1

      @outer_index += 1 while arrays[outer_index].empty?
    end

    val = arrays[outer_index][inner_index]
    @inner_index += 1
    val
  end

  def has_next
    on_last_element = outer_index == arrays.length - 1 && inner_index > arrays[outer_index].length - 1
    arrays.length > outer_index && !on_last_element
  end
end
