# * Daily Coding Problem February 21 2022

# * [Easy] -- Dropbox

# A Boolean formula can be said to be satisfiable if there is a
# way to assign truth values to each variable such that the entire formula evaluates to true.

# For example, suppose we have the following formula, where the symbol ¬ is used to denote negation:

# (¬c OR b) AND (b OR c) AND (¬b OR c) AND (¬c OR ¬a)
# Represented as: [(¬c, b), (b, c), (¬b, c), (¬c, ¬a)]

# One way to satisfy this formula would be to let a = False, b = True, and c = True.

# This type of formula, with AND statements joining tuples containing exactly one OR, is known as 2-CNF.

# Given a 2-CNF formula, find a way to assign truth values to satisfy it, or return False if this is impossible.

# --------------------------------------------------

require "set"
require_relative "term"

# Given a 2-CNF formula represented as a list of tuples, where each tuple contains two literals,
# return a satisfying assignment to the variables or return False if there is no such assignment.
def satisfiable?(formula)
  variables = get_all_variables(formula).to_a
  vars_copy = variables.clone
  assignments = generate_all_assignments!(variables)
  variable_mapping = assignments.map do |assignment|
    mapping = {}
    vars_copy.each_with_index do |variable, idx|
      mapping[variable] = assignment[idx]
    end
    mapping
  end
  variable_mapping.any? { |assignment| satisfies?(assignment, formula) }
end

# Gets all the variables from the formula
def get_all_variables(formula)
  variables = Set.new
  formula.each do |tuple| # each tuple is a pair of terms
    first_term = tuple[0]
    second_term = tuple[1]
    variables.add(first_term.variable)
    variables.add(second_term.variable)
  end
  variables
end

# Given a set of variables, return a list of all possible boolean assignments to those variables.
def generate_all_assignments!(variables)
  if variables.length == 0 # Base case
    return [[]]
  else # Recursive case
    variables.pop
    assignments = generate_all_assignments!(variables)
    new_assignments = []
    assignments.each do |assignment|
      new_assignments << [assignment, true]
      new_assignments << [assignment, false]
    end
    new_assignments.map { |assignment| assignment.flatten }
  end
end

# Test if this particular set of variable assignments satisfies the formula
def satisfies?(assignment, formula)
  formula.map { |tuple| evaluate_expression(tuple, assignment) }.all? { |result| result }
end

# Evaluates a single pair of terms with OR operator
def evaluate_expression(tuple, assignment)
  first_term, second_term = tuple[0], tuple[1]

  first_term_value = if first_term.negated
      assignment[first_term.variable]
    else
      !assignment[first_term.variable]
    end

  second_term_value = if second_term.negated
      assignment[second_term.variable]
    else
      !assignment[second_term.variable]
    end

  first_term_value || second_term_value
end

# def main
#   puts satisfiable?([
#          [Term.new("c", true), Term.new("b")],
#          [Term.new("b"), Term.new("c")],
#          [Term.new("b", true), Term.new("c")],
#          [Term.new("c", true), Term.new("a", true)],
#        ])
# end

# main
