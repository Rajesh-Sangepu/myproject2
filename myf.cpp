// file: error-sample.cpp
#include <iostream>
using namespace std;

int main() {
    // 1️⃣ Syntax error: missing semicolon
    cout << "Hello, World!"  

    // 2️⃣ Undefined variable
    cout << myVar << endl;

    // 3️⃣ Type error: assigning int to string
    string str = 100;

    // 4️⃣ Logical runtime error: division by zero
    int a = 10;
    int b = 0;
    int c = a / b;

    // 5️⃣ Array out of bounds
    int arr[3] = {1, 2, 3};
    cout << arr[5] << endl;

    return 0;
}


