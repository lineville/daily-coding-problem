require 'rspec'
require_relative '../lib/main'

describe 'Main' do
    it 'should return the correct value' do
        expect(implement_me).to eq(0)
    end
end