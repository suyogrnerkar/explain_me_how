// Reverse Array/String : 

void reverse(int[] arr) {
  for (int i= 0; i < arr.length/ 2; i++) { 
    int other= arr.length - i - 1; 
    int temp= arr[i]; 
    arr[i] = arr[other]; 
    arr[other] = temp;
  }
}

// Javascript way 

  
  // Try doing something like assigning str[0] = 'x' and you get this error.
  // => Cannot assign to read only property '0' of string
  
  // This is a because javascript strings are immutable, 
  // i.e. cannot be changed in place. But there's a workaround to this
  // Use string Builder :
  // - Need string builder i.e. a simple array which we use to collect chars
  //   and then use arr.join() e.g. string_buildr.join() to get edited string 
  
  // And as everything in javascript is an object and sth like a[i] is the 
  // property on object, it is possible to use it to build strings.
  
  // So assigning sth like a[3] = 's' is not assigning the index position 3
  // of array 'a', but is an assignment like a = {} and a.3 = 's'
  // which makes object a's look like { empty x 3, 's' }
  // i.e first 3 empty indexes and 4th index has val 's' in it.

function reverse(str) {
  let string_buildr = [];

  for (let i = 0; i < str.length/2; i++) {
    let head = str[i];
    let tail = str[str.length - i - 1];
    // use string builder to build reversed string 
    // chars array (more correctly an object)
    string_buildr[i] = tail;
    string_buildr[str.length - i - 1] = head;
  }
  // join to get the arr to get final string
  return string_buildr.join('');
}

console.log(reverse('explain_me_how'));