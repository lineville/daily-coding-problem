
# * Daily Coding Problem Jan 21 2022

# * [Easy] -- Snapchat

# Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

# The input list is not necessarily ordered in any way.

# For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].


class IntervalFlattener

  def flatten(intervals)
    intervals.sort_by! { |i| i[0] }
		result = []

		intervals.each do |interval|
			if result.empty? || result.last[1] < interval[0]
				result << interval
			else
				result[-1][1] = [result[-1][1], interval[1]].max
			end
		end

		result
  end

end
