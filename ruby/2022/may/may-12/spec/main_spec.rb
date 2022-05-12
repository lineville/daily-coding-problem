# frozen_string_literal: true

require 'rspec'
require_relative '../lib/main'

describe 'Partition' do
  it 'should partition the linked list on pivot k' do
    list = LinkedList.new
    list.append(5)
    list.append(1)
    list.append(8)
    list.append(0)
    list.append(3)

    k = 3
    result = partition(list.head, k)
    expect(result.to_s).to eq('1 -> 0 -> 5 -> 8 -> 3')
  end
end
