package main

import (
	"fmt"
)

func main() {
	numbers := []int{110, 210, 330, 123, 345, 151, 150}
	var temp int

	for _, num := range numbers {
		if num > temp {
			temp = num
		}
	}

	fmt.Println("nilai terbesar:", temp)
}
