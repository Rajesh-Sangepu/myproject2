// file: error-sample.go
package main

import "fmt"

func main() {
    // 1️⃣ Syntax error: missing closing parenthesis
    fmt.Println("Hello, World!"

    // 2️⃣ Undefined variable
    fmt.Println(nonExistentVar)

    // 3️⃣ Type error
    var num int = 10
    var str string = num  // cannot assign int to string

    // 4️⃣ Logical runtime error (will compile but panic)
    arr := []int{1, 2, 3}
    fmt.Println(arr[5]) // out of range
}



                
