# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'twenty_four?' do
  it 'should return true' do
    expect(twenty_four?([5, 2, 7, 8])).to eq(true)
  end

  it 'should return false' do
    expect(twenty_four?([5, 2, 7, 9])).to eq(false)
  end
end
