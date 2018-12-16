package main

import (
	"fmt"
	"time"
	// "runtime"
)

func isPrime(num int) bool {
	if num <= 1 {
		return false
	} else if num <= 3 {
		return true
	} else if num%2 == 0 || num%3 == 0 {
		return false
	}
	i := 5
	for i*i <= num {
		if num%i==0 || num%(i+2)==0 {
			return false
		}
		i += 6
	}
	return true
}

func findRand(num int) int {
	fmt.Println("Start: findRand for", num, time.Now().Format("15:04:05"))
	sumOfPrimes := 0
	ix := 2

	for ix <= num {
		if isPrime(ix) {
			sumOfPrimes += ix
		}
		ix += 1
	}

	fmt.Println("End: findRand for", num, time.Now().Format("15:04:05"))
	return sumOfPrimes
}

func findRands(nums []int) {
	fmt.Println("Start: findRands", time.Now().Format("15:04:05"))
	var sumOfPrimes []int
	for _, num := range nums {
		sumOfPrimes = append(sumOfPrimes,findRand(num))
	}
	for _, prime := range sumOfPrimes {
		fmt.Println("sum of primes:", prime)
	}
	fmt.Println("End: findRands", time.Now().Format("15:04:05"))
}

func main() {
	// runtime.GOMAXPROCS(4)
	randList := []int{10000000, 20000000, 30000000}

	findRands(randList)

}