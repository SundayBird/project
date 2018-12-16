package main

import (
	"fmt"
	"sync"
	"time"
	// "runtime"
)

func isPrime(num int, ch chan<- bool) {
	if num <= 1 {
		ch <- false
		return
	} else if num <= 3 {
		ch <- true
		return
	} else if num%2 == 0 || num%3 == 0 {
		ch <- false
		return
	}
	i := 5
	for i*i <= num {
		if num%i==0 || num%(i+2)==0 {
			ch <- false
			return
		}
		i += 6
	}
	ch <- true
	return
}

func findRand(num int, ch chan<- int, wg *sync.WaitGroup) {
	fmt.Println("Start: findRand for", num, time.Now().Format("15:04:05"))
	sumOfPrimes := 0
	ix := 2

	for ix <= num {
		ch2 := make(chan bool)
		go isPrime(ix, ch2)
		if <- ch2 {
			sumOfPrimes += ix
		}
		ix += 1
	}

	ch <- sumOfPrimes
	fmt.Println("End: findRand for", num, time.Now().Format("15:04:05"))
	wg.Done()
}

func findRands(nums []int) {
	var waitGroup sync.WaitGroup
	waitGroup.Add(len(nums))
	ch := make(chan int, len(nums))

	fmt.Println("Start: findRands", time.Now().Format("15:04:05"))
	for _, num := range nums {
		go findRand(num, ch, &waitGroup)
	}
	waitGroup.Wait()
	close(ch)
	for prime := range ch {
		fmt.Println("sum of primes:", prime)
	}
	fmt.Println("End: findRands", time.Now().Format("15:04:05"))
}

func main() {
	// runtime.GOMAXPROCS(4)
	randList := []int{10000000, 20000000, 30000000}

	findRands(randList)
}