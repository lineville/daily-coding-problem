# frozen_string_literal: true

# * Daily Coding Problem Feb 9th 2022

# * [Medium] -- Nest

# Create a basic sentence checker that takes in a stream of characters and
# determines whether they form valid sentences. If a sentence is valid, the program should print it out.

# We can consider a sentence valid if it conforms to the following rules:

# 1. ✅ The sentence must start with a capital letter, followed by a lowercase letter or a space.
# 2. ✅ fAll other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
# 3. ✅ There must be a single space between each word.
# 4. ✅ The sentence must end with a terminal mark immediately following a word.

def is_valid_word(word)
  word.split.each do |char|
    if char == char.downcase || char =~ /[,;:.?!]/
      next
    else
      return false
    end
  end
  true
end

def is_valid_sentence(sentence)
  # If first letter is capitalized, and ends w valid terminal mark
  if sentence[0] =~ /[A-Z]/ && sentence[-1] =~ /[.?!]/ && sentence[-2] =~ /[a-z]/
    sentence.split(/ /).each_with_index do |word, index|
      if index == 0 # First word check capitalized and second letter lowercase (if exists)
        capitalized = !word.empty? && word[0] =~ /[A-Z]/
        followed_by_space_or_lower_case = (word.length > 1 && word[1] =~ /[a-z]/) || word.length == 1
        return false if !capitalized || !followed_by_space_or_lower_case
      end

      return false if word == '' || (index > 0 && !is_valid_word(word))
    end
  else
    false
  end
end

def print_is_valid(sentence)
  is_valid_sentence(sentence) ? '✅' : '❌'
end

def main
  good_sentence = 'This is a valid sentence.'
  puts "#{good_sentence} #{print_is_valid(good_sentence)}"
  
  bad_sentence = 'This is not  a valid sentence.'
  puts "#{bad_sentence} #{print_is_valid(bad_sentence)}"

  bad_sentence_2 = 'This is not a valid sentence .'
  puts "#{bad_sentence_2} #{print_is_valid(bad_sentence_2)}"

  bad_sentence_3 = 'this is not a valid sentence.'
  puts "#{bad_sentence_3} #{print_is_valid(bad_sentence_3)}"

  bad_sentence_4 = 'This is not a Valid sentence.'
  puts "#{bad_sentence_4} #{print_is_valid(bad_sentence_4)}"

  bad_sentence_5 = 'This is not a valid sentence'
  puts "#{bad_sentence_5} #{print_is_valid(bad_sentence_5)}"
end

main
