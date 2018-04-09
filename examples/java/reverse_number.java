import java.io.*;
import java.util.ArrayList;

class MyCode {
  
  
  public static void main (String[] args) {
    int[] integers = new int[] { 123, - 456, 889, - 02 };
    // Init the instance of self to invoke the evaluate method.
    MyCode test = new MyCode();
    System.out.println( "Output : " + test.reverse(integers));
  }
  
  
  public ArrayList<Integer> reverse(int[] integers) {
    ArrayList<Integer> list = new ArrayList<Integer>();
    
    for (int x : integers) {
      int rev = 0;
      
      while(x != 0) {
        
       rev = rev * 10 + x % 10;
       x = x / 10;
      }
  
       list.add(rev);
    } 
    return list;
  }
}