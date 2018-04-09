// Square root of a Number : Newton's Approximation Methd.

// Proper way to loop for finding the square root of a number in Go.

// This uses an approximation and convergence using the Newton's
// method of differential calculus for square root approximation

// Mathematically we should continue with the looping or (approximation)
// unless the delta is small enough so that we are closest to the roots
// of the quadratic equation i.e. square roots function. 

// Many of the algorithm implementations found online loop arbitrarily
// with an arbitrary n value for looping like for e.g. i= 0 ; i < x ; i++
// without accounting for the delta which is of prime importance to 
// this calculation as we will never get an accurate of root value due to
// limitations of the computing power. We would only be in certain limits
// of the actual root.

// The algorithm keeps looping unless the delta is small enough to the 
// expected delta with an initial seed of z = 1 for finding square root of 2.

// Newton's approximation : https://www.youtube.com/watch?v=cOmAk82cr9M

package main

import (
  "fmt"
  "math"
)

func Sqrt(x float64) float64 {
  z := 1.0  
  delta_expected := 0.000000000000001
  for math.Abs((z*z - x) / (2*z)) > delta_expected {
      fmt.Println("Absolute diff (Delta): ", math.Abs((z*z - x) / (2*z)))
      z -= (z*z - x) / (2*z)
  }
  return z
}

func main() {
  fmt.Print("Square root is: ", Sqrt(2))
}