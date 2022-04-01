# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'TwoDimensionalIterator' do
  subject { TwoDimensionalIterator.new(arrays) }

  context 'has some elements' do
    let(:arrays) { [[1, 2], [3], [], [4, 5, 6]] }

    it 'should iterate through all the elements' do
      expect(subject.has_next).to be true
      expect(subject.next).to eq 1
      expect(subject.next).to eq 2
      expect(subject.next).to eq 3
      expect(subject.next).to eq 4
      expect(subject.next).to eq 5
      expect(subject.next).to eq 6
      expect(subject.has_next).to be false
    end
  end

  context 'has no elements' do
    let(:arrays) { [] }

    it { expect(subject.has_next).to be false }
  end
end
