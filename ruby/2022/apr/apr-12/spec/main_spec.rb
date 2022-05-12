# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'HitCounter' do
  subject { HitCounter.new }

  context 'single hit' do
    before do
      subject.record(Time.now.to_i)
    end

    describe '#record' do
      it 'should return 1' do
        expect(subject.hits.length).to eq(1)
      end
    end

    describe '#total' do
      it 'should return the total number of hits' do
        expect(subject.total).to eq(1)
      end
    end

    describe '#range' do
      let(:lower) { (Time.now - 10.seconds).to_i }
      let(:upper) { (Time.now + 10.seconds).to_i }
      it 'should return the number of hits in the range' do
        expect(subject.range(lower, upper)).to eq(1)
      end
    end
  end

  context 'multiple hits' do
    before do
      subject.record(Time.now.to_i)
      subject.record((Time.now + 10.seconds).to_i)
    end

    describe '#record' do
      it 'should add multiple hits to the list' do
        expect(subject.hits.length).to eq(2)
      end
    end

    describe '#total' do
      it 'should return the total number of hits' do
        expect(subject.total).to eq(2)
      end
    end

    describe '#range' do
      context 'all hits in range' do
        let(:lower) { (Time.now - 10.seconds).to_i }
        let(:upper) { (Time.now + 15.seconds).to_i }
        it 'should return 2' do
          expect(subject.range(lower, upper)).to eq(2)
        end
      end

      context 'only one hit in range' do
        let(:lower) { (Time.now - 10.seconds).to_i }
        let(:upper) { (Time.now + 5.seconds).to_i }
        it 'should return 1' do
          expect(subject.range(lower, upper)).to eq(1)
        end
      end
    end
  end
end
