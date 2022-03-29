# frozen_string_literal: false

require 'rspec'
require_relative '../lib/main'

describe 'Main' do
  subject { palindromes(str) }

  context "when given 'racecarannakayak'" do
    let(:str) { 'racecarannakayak' }
    it { is_expected.to eq(%w[racecar anna kayak]) }
  end

  context "when given 'abc'" do
    let(:str) { 'abc' }
    it { is_expected.to eq(%w[a b c]) }
  end

  context "when given 'racecarannakayakkayakannaracecar'" do
    let(:str) { 'racecarannakayakkayakannaracecar' }
    it { is_expected.to eq(%w[racecarannakayakkayakannaracecar]) }
  end
end
