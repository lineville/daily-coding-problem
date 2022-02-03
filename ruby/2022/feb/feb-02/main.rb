# frozen_string_literal: true

# * Daily Coding Problem Feb 2nd 2022

# * [Medium] -- Twitter

# Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer.
#  For example, given [10, 7, 76, 415], you should return 77641510.

class LargestMergedNumber
  def initialize(args)
    @args = args
  end

  def sort_numbers
    @args = @args.map { |n| n.to_s }
    @args.sort!.reverse!
    self
  end

  def join_numbers
    @args.join.to_i
  end

  def largest_number
    sort_numbers.join_numbers.to_s
  end
end

input_nums = [10, 7, 76, 415]
largest_merged_number = LargestMergedNumber.new(input_nums)
puts "#{input_nums} --> #{largest_merged_number.largest_number}"


