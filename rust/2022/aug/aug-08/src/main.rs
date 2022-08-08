// * Daily Coding Problem August 8 2022

// * [Hard] -- Goldman Sachs

// Given a list of numbers L, implement a method sum(i, j) which returns the
// sum from the sublist L[i:j] (including i, excluding j).

// For example, given L = [1, 2, 3, 4, 5], sum(1, 3)
// should return sum([2, 3]), which is 5.

// You can assume that you can do some pre-processing.
// sum() should be optimized over the pre-processing step.

struct OptimizedSubsetSum {
    left_sum: Vec<i32>,
    right_sum: Vec<i32>,
    total_sum: i32,
}

impl OptimizedSubsetSum {
    fn new(nums: Vec<i32>) -> Self {
        let mut left_sum = vec![0; nums.len()];
        let mut right_sum = vec![0; nums.len()];
        let mut total_sum = 0;
        for i in 0..nums.len() - 1 {
            total_sum += nums[i];
            left_sum[i + 1] = total_sum;
        }
        total_sum = 0;
        for (i, n) in nums.iter().rev().enumerate() {
            total_sum += *n;
            right_sum[nums.len() - i - 1] = total_sum;
        }
        OptimizedSubsetSum {
            left_sum: left_sum,
            right_sum: right_sum,
            total_sum: total_sum,
        }
    }
    fn sum(&self, i: usize, j: usize) -> i32 {
        let sum_left_of_i = self.left_sum[i];
        let sum_right_of_j = if j >= self.right_sum.len() {
            0
        } else {
            self.right_sum[j]
        };
        self.total_sum - (sum_left_of_i + sum_right_of_j)
    }
}


fn main() {
    let oss = OptimizedSubsetSum::new(vec![1, 2, 3, 4, 5]);
    println!("Sum(1, 3) -> {}", oss.sum(1, 3));
    println!("Sum(1, 4) -> {}", oss.sum(1, 4));
    println!("Sum(0, 5) -> {}", oss.sum(0, 5));
}


#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_optimized_subset_sum() {
        let oss = OptimizedSubsetSum::new(vec![1, 2, 3, 4, 5]);
        assert_eq!(oss.sum(1, 3), 5);
        assert_eq!(oss.sum(1, 4), 9);
        assert_eq!(oss.sum(0, 5), 15);
    }
}