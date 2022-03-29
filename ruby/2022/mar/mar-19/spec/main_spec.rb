# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'Main' do
  subject { max_area_all_ones(matrix) }
  context 'when given a valid input' do
    let(:matrix) do
      [
        [1, 0, 0, 0],
        [1, 0, 1, 1],
        [1, 0, 1, 1],
        [0, 1, 0, 0]
      ]
    end
    it 'should return the correct value' do
      expect(subject).to eq(4)
    end
  end
end
