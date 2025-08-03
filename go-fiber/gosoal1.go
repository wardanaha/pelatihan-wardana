package main

import (
	"fmt"
)

func main() {
	numbers := []int{110, 210, 330, 123, 345, 151, 150}
	var result []int

	for _, value := range numbers {
		if value > 150 {
			result = append(result, value)
		}
	}

	fmt.Println("Hasilnya :", result)
}
