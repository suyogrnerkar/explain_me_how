--------------------------------------------------------------------------------
  # Brackets Match : Javascript 
--------------------------------------------------------------------------------

function brackets_match(values) {
    if(isOdd(values.length)){
        return false;
    }
    
    /*  
      If we match any other character than the allowed ones,
      i.e. we have some garbage that should not be pushed to 
      stack. So we just terminate for simplicity purpose.
        
      [^\[\]\(\)\{\}] : ^ in regex matches any character other  
                        than one of {, }, [, ], (, ) 
    */
  
    if(values.match(/[^\[\]\(\)\{\}]/)) {
      return false;
    }
    
    let brackets = {'{' : '}', '(' : ')', '[' : ']'};
    let stack = [], expected;
  
    for (let i = 0; i < values.length; i++) {
      if (values[i] in brackets) {
          stack.push(brackets[values[i]]);
      }
      else {
        expected = stack.pop();
        if(values[i] !== expected) {
          return false;
        }
        
      }
    }
    return (stack.length == 0) ? true : false;
}

function isOdd(num) {
    return num%2 === 1;
}

console.log(brackets_match("{[](}"));
console.log(brackets_match("{[]()}"));