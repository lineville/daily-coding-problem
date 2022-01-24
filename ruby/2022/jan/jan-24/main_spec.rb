
require 'rspec/autorun'
require './main.rb'

describe Main do
  it 'should square and sort the numbers' do
    square_sorter = Main.new

    expect(square_sorter.square_and_sort([-9, -2, 0, 2, 3])).to eq([0, 4, 4, 9, 81])
  end

  it 'should square and sort the numbers' do
    square_sorter = Main.new

    expect(square_sorter.square_and_sort([-2, -9, 0, 2, 3])).to eq([0, 4, 4, 9, 81])
  end
end
