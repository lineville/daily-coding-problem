# frozen_string_literal: true

# Daily Coding Problem April 17 2022

# * [Easy] -- Twitter

# The 24 game is played as follows. You are given a list of four integers,
# each between 1 and 9, in a fixed order.

# By placing the operators +, -, *, and / between the numbers, and grouping
# them with parentheses, determine whether it is possible to reach the value 24.

# For example, given the input [5, 2, 7, 8],
# you should return True, since (5 * 2 - 7) * 8 = 24.

# Write a function that plays the 24 game.

def twenty_four?(nums)
  # Check all combinations of 3 operators and all parens grouping combos

  # If any of these combinations result in 24, return true

  # If none of these combinations result in 24, return false
  ops = operator_permutations
  ops.each do |op|
    nums.permutation(4).to_a.each do |perm|
      res = [perm[0], op[0], perm[1], op[1], perm[2], op[2], perm[3]]
      return true if eval(res.join).to_i == 24
    end
  end
  false
end

def operator_permutations
  operators = %i[+ - * /]
  operators.permutation(3).to_a
end
