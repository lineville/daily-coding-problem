
# * Daily Coding Problem Jan 24 2022

# * [Easy] -- Google

# Given a sorted list of integers, square the elements and give the output in sorted order.

class Main

    def square_and_sort(nums)
        nums.map { |num| num * num }.sort    
    end
end