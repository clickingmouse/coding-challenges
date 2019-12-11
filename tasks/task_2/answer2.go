package main

import "fmt"

func pow(x, n float64) float64 {

	if n < 0 {
		n = -1 * n
		x = 1 / x
	}
	var p float64 = 1.0
	for i := 1.0; i <= n; i++ {
		p = p * x
	}

	//var result float64 = 1.0
	// for exponent := n; exponent > 0; exponent-- {
	// 	result = result * x
	// 	fmt.Println(result)
	// }
	return p
}

func main() {

	fmt.Printf("%f^%f = %f \n", 2.0, 10.0, pow(2.0, 10.0))
	fmt.Printf("%f^%f = %f \n", 2.1, 3, pow(2.1, 3))
	fmt.Printf("%f^%f = %f \n", 2, -2, pow(2, -2))
}
