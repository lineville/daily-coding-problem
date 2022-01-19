
# * Daily Coding Proplem Jan 19 2022

# * [Hard] -- Stripe

# Given an array of integers, find the first missing positive 
# integer in linear time and constant space. In other words, 
# find the lowest positive integer that does not exist in the array. 
# The array can contain duplicates and negative numbers as well.

# For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

# You can modify the input array in-place.

def firstMissingPositiveInt(nums)
    nums.sort! # O(nlogn) sort in place -1 1 3 4
    
    i = 0
    while i < nums.length
        # nums to skip (negatives, greater than length of nums, equal to current index + 1)
        if nums[i] <= 0 || nums[i] > nums.length || nums[i] == i + 1
            i += 1
        else
            # swap nums[i] with nums[nums[i] - 1]
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        end
    end
    
    i = 0
    while i < nums.length
        # Found the solution
        if nums[i] != i + 1
            return i + 1
        end
        i += 1
    end
    
    # Default return if nothing is really missing (it's just the next biggest number)
    return nums.length + 1
end


def main
    in1 = [3, 4, -1, 1]
    in2 = [1, 2, 0]
    puts "First missing positive int"
    puts in1.join(', ') + ' --> ' + firstMissingPositiveInt(in1).to_s
    puts in2.join(', ') + ' --> ' + firstMissingPositiveInt(in2).to_s
end

main()