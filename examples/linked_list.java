//// LINKED LISTS :

//  Why should I care about LinkedLists when I write modern HLL's?

/// Prime Advantages of Linked Lists :-
//  For any node it has
//  - Constant Insertion time
//  - Constant Deletion time


/// Why not just use Arrays ?
//  - Arrays are indexed and has it's advantages
//    when searching for the elements.
//  - Deleting elements from start of array causes
//    resizing the of array. That's a problem.
//    Needs more memory to do it, making the size
//    allocations of memory to be unpredictable. 

//  - But Linked Lists, can delete and add the 
//    elemets/nodes on the fly without any cost 
//    of maintenance with a small overhead of
//    knowing surrounding nodes.

//  - Makes memory allocations more predictable



//  General uses of Linked Lists:-
//  - When we don't need to do Searching
//  - Only need to add elements at start and the end, 
//    like Queues
//  - Has added traversal cost for searching. 



/***  Dissecting Linked Lists ***/

// Every Linked List has a Node as a Prime element.
Public class Node {
  // It has some Data.
  int data;

  // Now it also has a surrounding nodes. 
  Node next;
 
  // Constructor
  public Node(int data)  {
    this.data = data;
  }

  // Note: We could have written all the methods like prepend
  //       append, deleteWithValue in this Node class itself,
  //       but that gives any user free access to all data in node.
  //       Because we would do sth like, Node x = new Node(data)
  //       and now we just opened up access to all properties 
  //       of node x which can be accessed as x.data, x.data2, etc.

  //       How we actually hide and protect the Node here is
  //       by not letting the user know that there's any data Node
  //       class named Node that stores the actual data. We only expose
  //       the methods prepend, append, deleteWithValue and what they
  //       take in as parameters.
}

// Most importantly, linked List has a HEAD node where it all starts.
// If for some reason the head node changes, we have to change it at
// every place in code.That's not good design. So a workaround is to 
// create a new class LinkedList with a Node called 'head' and methods
// to make modifications to the head node or the linked list itself.

public class LinkedList {
  Node head;

  // Appends a node to a node i.e at end of linked list
  // e.g. Node : () -> () -> () -> null
  public void append(int data) {
    // Some sanity check
    if (head == null) {
      head  = new Node(data);
      return;
    }
    Node current = head;
    // Traverse to end
    while (current.next != null) {
      current = current.next;
    }
    // Append to last
    current.next = new Node(data);
  }

  // Prepend list wth some new node.
  // Set next node of new head as current head
  public void prepend(int data) {
    Node newHead = new Node(data);
    newHead.next = head;
    head = newHead;
  }

  public void deleteWithValue(int data) {
    // No head, return
    if (head == null) return;
    // if we head node itself matched, pseudo 
    // delete it by setting the next node as head.
    if (head.data == data) {
      head = head.next;
      return;
    } 
    // Traverse through list  
    Node current = head;
    while (current.next != null) {
      if( current.next.data == data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;  
    }
  }
}









