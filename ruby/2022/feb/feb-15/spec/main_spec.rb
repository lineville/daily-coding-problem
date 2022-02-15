require "rspec"
require_relative "../lib/main"

describe "starting_indices" do
  it "should find the starting indices of pattern in str" do
    expect(starting_indices("abrakadabra", "abr")).to eq([0, 7])
  end
end
