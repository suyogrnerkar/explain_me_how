/* Detect a cycle in Linked List. List may be empty i.e. "Head pointer null"

A node is given as 

class Node {
  int data;
  Node next;
}

Possible Solutions: 
  
  Method 1 : 
    Marking Nodes:
      Keep marking every node you traverse in the list, by using 
      some extra variable/property 'seen' stored in the node itself. If you 
      come back to it again, you have already marked it as 'seen = true', 
      thus a cycle. But this needs the list to be modifiable
      and if you can't modify a linked list provided then there's a 
      workaround as method 2

  Method 2 : 
    Two cars crossing theory : 
      If two cars move on a road at different speeds
      one more faster than other, they will eventually
      cross each other if there's a loop and if not,
      they reach the end, but a t different times.

      METHOD 2 IS EXPLAINED BELOW
*/

boolean findCycle(Node head) {
  // Empty list
  if (head == null) return;

  // Start both at head
  Node slow = head.;
  Node fast = head.next;

  // Traverse and look for Cycle, we found one
  while (slow != null && fast != null && fast.next != null) {
    // If fast starts with head, this satisfies 
    // for the first run itself. So we hack
    // the initialization of fast above to be head.next
    // Also, if head.next is null, fast becomes null,
    // so stop and return false. Null po ahead.
    
    if (slow == fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
}



