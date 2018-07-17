# 1. LEETCODE : LinkedList : Add, delete, get elements at index

# ------------------------------------------------------------------------------
# MY SOLUTION : 208 ms
# ------------------------------------------------------------------------------

class MyLinkedList

=begin
    Initialize your val structure here.
=end
  def initialize()
    @head = nil
    @length = 0
  end


=begin
    Get the value of the index-th node in the linked list. If the index is
    invalid, return -1.

    :type index: Integer
    :rtype: Integer
=end
  def get(index)
    puts  @length
    return -1 if index < 0 || index >= @length
    return @head.val if index == 0
    curr = @head
    for i in 0...index
      curr = curr.next_node
    end
    return curr.val
  end


=begin
    Add a node of value val before the first element of the linked list. After
    the insertion, the new node will be the first node of the linked list.

    :type val: Integer
    :rtype: Void
=end
  def add_at_head(val)
    if (@head == nil)
      @head = Node.new(val)
    else
      new_node = Node.new(val)
      new_node.next_node = @head
      @head = new_node
    end
    @length += 1
  end


=begin
    Append a node of value val to the last element of the linked list.
    :type val: Integer
    :rtype: Void
=end
  def add_at_tail(val)
    curr = @head
    while(curr.next_node != nil)
      curr = curr.next_node
    end
    new_node = Node.new(val)
    new_node.next_node = curr.next_node
    curr.next_node = new_node
    @length += 1
  end


=begin
    Add a node of value val before the index-th node in the linked list. If
    index equals to the length of linked list, the node will be appended to
    the end of linked list. If index is greater than the length, the node
    will not be inserted.

    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
def add_at_index(index, val)
  return -1 if index < 0 || index > @length
  new_node = Node.new(val)
  if index == 0
    new_node.next_node = @head
    @head = new_node
  else
    curr = @head
    for i in 0...index-1
      curr = curr.next_node
    end

    if curr.next_node != nil
      new_node.next_node = curr.next_node
      curr.next_node = new_node
    else
      new_node.next_node = nil
      curr.next_node = new_node
    end
  end
  @length += 1
end


=begin
    Delete the index-th node in the linked list, if the index is valid.
    :type index: Integer
    :rtype: Void
=end
  def delete_at_index(index)
    return -1 if index < 0 || index >= @length
    curr = @head

    if index == 0
      @head = curr.next_node
    else
      for i in 0...index-1
        curr = curr.next_node
      end

      if curr.next_node != nil
       curr.next_node = curr.next_node.next_node
     else
       curr = nil
     end
    end
    @length -= 1
  end

=begin
    Display the Linked List
=end

  def display()
    if(@head == nil)
      print ("Empty Linked List")
    else
      curr = @head
      while (curr.next_node != nil)
        print ("#{curr.val} -> ")
        curr = curr.next_node
      end
      print ("#{curr.val} -> nil")
    end
  end
end


class Node
  attr_accessor :val, :next_node

  def initialize(val)
    @val = val
    @next_node = next_node
  end
end

# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList.new()
# param_1 = obj.get(index)
# obj.add_at_head(1)
# obj.add_at_index(1, 2)

# puts obj.get(1)
# puts obj.get(0)
# puts obj.get(2)
# obj.display()
# obj.add_at_tail(val)
# obj.add_at_index(index, val)
# obj.delete_at_index(index)


# ------------------------------------------------------------------------------
# BETTER SOLUTION : 168 ms
# ------------------------------------------------------------------------------

class Node
    attr_accessor :next, :value
    def initialize(value, next_node=nil)
        @value = value
        @next = next_node
    end
end

class MyLinkedList
    attr_accessor :head

=begin
    Initialize your data structure here.
=end
    def initialize()
        @head = nil
    end


=begin
    Get the value of the index-th node in the linked list. If the index
    is invalid, return -1.

    :type index: Integer
    :rtype: Integer
=end
    def get(index)
        node = node_at_index(index)
        node ? node.value : -1
    end


=begin
    Add a node of value val before the first element of the linked list.
    After the insertion, the new node will be the first node of the linked list.

    :type val: Integer
    :rtype: Void
=end
    def add_at_head(val)
        n = Node.new(val, head)
        self.head = n
    end


=begin
    Append a node of value val to the last element of the linked list.

    :type val: Integer
    :rtype: Void
=end
    def add_at_tail(val)
        node = head
        until node.next.nil? do
            node = node.next
        end
        node.next = Node.new(val)
    end


=begin
    Add a node of value val before the index-th node in the linked list. If
    index equals to the length of linked list, the node will be appended to
    the end of linked list. If index is greater than the length, the node
    will not be inserted.

    :type index: Integer
    :type val: Integer
    :rtype: Void
=end
    def add_at_index(index, val)
        if index == 0
            add_at_head(val)
            return
        end
        prior = node_at_index(index-1)
        if prior
            node = Node.new(val, prior.next)
            prior.next = node
        end
    end


=begin
    Delete the index-th node in the linked list, if the index is valid.
    :type index: Integer
    :rtype: Void
=end
    def delete_at_index(index)
        if index == 0
            node = head
            self.head = head.next
            node.next = nil
            return
        end
        prior = node_at_index(index-1)
        del = prior&.next
        prior&.next = prior&.next&.next
        del&.next = nil
    end

    private

        def node_at_index(index)
            idx = 0
            node = head
            until node.nil? || idx == index do
                idx += 1
                node = node.next
            end
            node
        end

end


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList.new()
# param_1 = obj.get(index)
# obj.add_at_head(val)
# obj.add_at_tail(val)
# obj.add_at_index(index, val)
# obj.delete_at_index(index)


