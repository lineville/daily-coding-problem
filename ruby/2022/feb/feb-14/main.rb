
# * Daily Coding Problem February 14 2022

# * [Easy] -- PayPal

# Given a string and a number of lines k, print the string in zigzag form. 
# In zigzag, characters are printed out diagonally from top left to bottom
#  right until reaching the kth line, then back up to top right, and so on.

# For example, given the sentence "thisisazigzag" and k = 4, you should print:

# t     a     g
#  h   s z   a
#   i i   i z
#    s     g

def print_zig_zag(str, k)
    # * Initialize the array to store the lines
    lines = Array.new(k) { Array.new }
    
    # * Initialize the index for the current line
    index = 0
    
    # * Iterate through the string
    str.each_char do |char|
        # * Add the character to the current line
        lines[index] << char
    
        # * If the current line is full, move to the next line
        if lines[index].length == k
        index += 1
        end
    end
    
    # * Print the lines
    lines.each do |line|
        puts line.join
    end
end


print_zig_zag("thisisazigzag", 4)
