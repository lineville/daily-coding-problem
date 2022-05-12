# frozen_string_literal: true

# * Daily Coding Problem April 12 2022

# * [Easy] -- Riot Games

# Design and implement a HitCounter class that keeps track of requests (or hits).
# It should support the following operations:

# record(timestamp): records a hit that happened at timestamp
# total(): returns the total number of hits recorded
# range(lower, upper): returns the number of hits that occurred between timestamps lower and upper (inclusive)
# Follow-up: What if our system has limited memory?

# HitCounter -- tracks counts that occured at specific times
class HitCounter
  attr_accessor :hits

  def new(hits = [])
    @hits = hits
  end

  def record(timestamp)
    @hits << timestamp
  end

  def total
    @hits.length
  end

  def range(lower, upper)
    @hits.select { |hit| hit >= lower && hit <= upper }.length
  end
end
