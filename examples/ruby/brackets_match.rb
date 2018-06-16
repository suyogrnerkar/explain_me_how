--------------------------------------------------------------------------------
  # Brackets Match : Ruby 
--------------------------------------------------------------------------------

# Given a string with any combination of the following brackets: "(){}[]".
#
# The output should determine true/false depening on
# the open/close ordering of the brackets
#
# For example:
# "()"   => true
# "[{}]" => true
# "{[]()}" => true

# "{]"   => false
# "{}["  => false
# "{[}]" => false
# "}[{]" => false


def brackets_check? input
  
  # if odd ... no point in matching, return false
  return false if input.length.odd?
  # if any other character than the match group, return false
  return false if input =~ /[^\[\]\(\)\{\}]/
  
  # keeps track of what to expect next
  brackets = {'{' => '}', '[' => ']', '(' => ')'}
  
  # current expected value
  stack_track = []
  
  input.chars do |c|
    # if a corresponding value exists for a bracket 
    # currently in string, push its value in stack_track
    # which also becomes our expected value for every 
    # addition in the stack.
    
    if brackets[c]
      stack_track << brackets[c]
      
    # if no corresponding value exists,
    # - meaning we encountered a closed brackets
    # - check the current char with the last expected
    #   value in stack or return false
    else
      # this return just exits the loop with leaving 
      # further stack ulaltered
      return false unless stack_track.pop == c
    end
  end
  
  # Now check the stack_track
  # - if empty, every expected bracket matched the other part of string
  # - if not, there's something in stack still not matched because 
  #   something mismatched and caused the loop to exit.
  stack_track.empty?

  # Do we really need to check if stack empty ?
  # - Only if you need to return 'true' as a value for the valid
  #   matches, otherwise it returns back the matched input
  #   string itself because ruby returns value of last statement
  #   and the block iteration on chars of input causes the input 
  #   string to return itself.
  # - No issues for false, it works either ways
end


# Execute !!!
puts "\n-> Valid <-\n"
puts brackets_check? '()'
puts brackets_check? '[{}]'
puts brackets_check? '{[]()}'

puts "\n-> Invalid <-\n"
puts brackets_check? '{]'
puts brackets_check? '{}['
puts brackets_check? '{[}]'
puts brackets_check? '}[{]'
puts brackets_check? '({}})'


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