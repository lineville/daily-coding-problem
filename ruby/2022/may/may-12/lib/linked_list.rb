# frozen_string_literal: false
require_relative 'node'

# Singly Linked List
class LinkedList
  attr_accessor :head, :tail, :size

  def initialize
    @head = nil
    @tail = nil
    @size = 0
  end

  def append(value)
    if @head.nil?
      @head = Node.new(value)
      @tail = @head
    else
      current = @head
      current = current.next while current.next
      current.next = Node.new(value)
      @tail = current.next
    end
    @size += 1
  end

  def to_s
    val = @head
    str = ''
    while val
      str << val.value.to_s
      str << ' -> ' if val.next
      val = val.next
    end
    str
  end
end
