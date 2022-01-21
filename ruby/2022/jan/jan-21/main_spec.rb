# frozen_string_literal: true

require 'rspec/autorun'
require './main.rb'

describe IntervalFlattener do
  it 'flattens intervals with overlaps 1' do
    flattener = IntervalFlattener.new

    expect(flattener.flatten([[1, 3], [5, 8], [4, 10], [20, 25]])).to eq([[1, 3], [4, 10], [20, 25]])
  end

  it 'flattens intervals with overlaps 2' do
    flattener = IntervalFlattener.new

    expect(flattener.flatten([[1, 4], [5, 8], [4, 10], [20, 25]])).to eq([[1, 10], [20, 25]])
  end

  it 'flattens intervals with overlaps 3' do
    flattener = IntervalFlattener.new

    expect(flattener.flatten([[1, 100], [5, 8], [4, 10], [20, 25]])).to eq([[1, 100]])
  end
end
