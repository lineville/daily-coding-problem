# * Daily Coding Problem: February 23 2022

# * [Medium] -- Jane Street

# cons(a, b) constructs a pair, and car(pair) and cdr(pair)
# returns the first and last element of that pair.

# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

# Given this implementation of cons:
def cons(first, second)
  def pair(func, first, second)
    func(first, second)
  end
  pair([first, second])
end

# Implement car and cdr.

def car(pair)
  puts pair
end

def cdr(pair)
  puts pair
end

def main
    puts "car(cons(3, 4)) returns #{car(cons(3, 4))}"
    puts "cdr(cons(3, 4)) returns #{cdr(cons(3, 4))}"
end

main