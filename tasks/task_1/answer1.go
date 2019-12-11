package main

//he formula to calcualte a sequence ID is defined as:
//S(N) = S(N-1) + S(N-2), for N > 1
//where
//S(0) = 0
//S(1) = 1

import (
	"fmt"
)

func Fib(n int) int {
	if n <= 1 {
		return n
	}
	return Fib(n-1) + Fib(n-2)
}

func getSequence(N int) int {
	return Fib(N)
}

func main() {
	// testing
	for i := 0; i <= 30; i++ {
		fmt.Printf("S(%d) = %d\n", i, getSequence(i))
	}

}
