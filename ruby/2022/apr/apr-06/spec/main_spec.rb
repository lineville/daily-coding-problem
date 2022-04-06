# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'nearest_points' do
  context 'when given a list of points and a central point and k' do
    let(:points) { [[0, 0], [5, 4], [3, 1]] }
    let(:central_point) { [1, 2] }
    let(:max_points) { 2 }

    it 'returns the nearest k points from the central point' do
      expect(nearest_points(points: points, central_point: central_point,
                            max_points: max_points)).to eq([[0, 0], [3, 1]])
    end
  end
end

describe 'distance' do
  context 'when given two points' do
    let(:point1) { [0, 0] }
    let(:point2) { [3, 4] }

    it 'returns the distance between the two points' do
      expect(distance(point1, point2)).to eq(5)
    end
  end

  context 'when given two points' do
    let(:point1) { [0, 0] }
    let(:point2) { [1, 1] }

    it 'returns the distance between the two points' do
      expect(distance(point1, point2)).to eq(Math.sqrt(2))
    end
  end
end
