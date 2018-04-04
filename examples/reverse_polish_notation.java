// Evaluate the value of an arithmetic expression in Reverse Polish Notation. 
// Valid operators are +, -, *, /. Each operand may be an integer or another 
// expression. POSTFIX Notation. 

// Examples:
//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6

mport java.io.*;
import java.util.Stack;

class MyCode {
  public static void main (String[] args) {
    String[] tokens = new String[] { "4" , "4", "+", "3", "*" };
    // Init the instance of self to invoke the evaluate method.
    MyCode test = new MyCode();
    System.out.println( " Output : " + test.evaluateRPN(tokens));
  }

  
  // An instance method that does the evaluation.
  // How it works ?
  // - We have a list of operators to check from.
  // - As soon as we get a list of tokens, we iterate over it and match
  //   a single token with the operators list.
  //   If NO match is found, push it to the stack of numbers
  //   If a match is found, pop back the numbers from stack, add them, 
  //   push them back. At last we end up having the final evaluation
  //   left in the stack. Pull that out and return. 
  
  public int evaluateRPN (String[] tokens) {
    int retVal = 0;
    String operators = "+-/*";
    Stack<String> stack = new Stack<String>();

    for (String token : tokens) {
      if (!operators.contains(token))  {
        stack.push(token);
      }
      else {
        int a = Integer.valueOf(stack.pop());
        int b = Integer.valueOf(stack.pop());

        switch (token) {
          case "+" :
            stack.push(String.valueOf(a+b));
          break;
          case "-" :
            stack.push(String.valueOf(a-b));
          break;
          case "*" :
            stack.push(String.valueOf(a*b));
          break;
          case "/" :
            stack.push(String.valueOf(a/b));
          break;
        }
      }
    } 
    retVal = Integer.valueOf(stack.pop());
    return retVal;
  }
}