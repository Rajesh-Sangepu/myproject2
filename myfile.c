// file: error-sample.c
#include <stdio.h>

int main() {
    // 1️⃣ Syntax error: missing semicolon
    printf("Hello, World!\n")  

    // 2️⃣ Undefined variable
    printf("%d\n", nonExistentVar);

    // 3️⃣ Type error: assigning float to int without cast
    int num = 3.14;

    // 4️⃣ Logical runtime error: divide by zero
    int a = 10;
    int b = 0;
    int c = a / b;  // runtime crash

    // 5️⃣ Array out of bounds
    int arr[3] = {1, 2, 3};
    printf("%d\n", arr[5]);

    return 0;
}

