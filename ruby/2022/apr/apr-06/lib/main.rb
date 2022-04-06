# frozen_string_literal: true

# * Daily Coding Problem April 6 2022

# * [Hard] -- LinkedIn

# Given a list of points, a central point, and an integer k,
# find the nearest k points from the central point.

# For example, given the list of points [(0, 0), (5, 4), (3, 1)],
# the central point (1, 2), and k = 2, return [(0, 0), (3, 1)].

def nearest_points(points:, central_point:, max_points:)
  points.sort_by { |point| distance(point, central_point) }.take(max_points)
end

def distance(point1, point2)
  delta_x = (point1[0] - point2[0]).abs
  delta_y = (point1[1] - point2[1]).abs
  Math.sqrt(delta_x**2 + delta_y**2)
end
