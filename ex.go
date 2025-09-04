/*// file: error-sample.go
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
*/


// file: error-sample.go
package main

import "fmt"

func main() {
    // 1️⃣ Fixed syntax error: added closing parenthesis
    fmt.Println("Hello, World!")

    // 2️⃣ Fixed undefined variable by defining it
    nonExistentVar := "I exist now"
    fmt.Println(nonExistentVar)

    // 3️⃣ Fixed type error by converting int to string properly
    var num int = 10
    str := fmt.Sprintf("%d", num)  // convert int to string
    fmt.Println(str)

    // 4️⃣ Fixed logical runtime error by accessing valid index
    arr := []int{1, 2, 3}
    if len(arr) > 5 {
        fmt.Println(arr[5])
    } else {
        fmt.Println("Index 5 is out of range. Array length is", len(arr))
    }
}
