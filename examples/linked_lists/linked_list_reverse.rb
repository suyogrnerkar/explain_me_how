# In place reversal of linked list. No added space or time complexity.
# Total time complexity: O(n)
#     => We only traverse the list once
#        and do the changes within the same traversal

def reverse_linked_list(head_of_list)
  current_node = head_of_list
  previous_node = nil
  next_node = nil

  while (current_node) do
    # what we do is simply reversing the pointers here
    # holding a next node pointer temporarily in next_node
    next_node = current_node.next
    current_node.next = previous_node

    previous_node = current_node
    current_node = next_node
  end

  return previous_node
end
