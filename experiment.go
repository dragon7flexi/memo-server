package main

import "fmt"

func experimnt() {
	var x int = 42
	var p *int = &x

	fmt.Println(p)  // like: 0xc000012078
	fmt.Println(*p) // 42
}
