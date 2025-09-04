// file: error-types.js

// 1️⃣ Syntax Error
function add(a, b {
  return a + b; // Missing closing parenthesis
}

// 2️⃣ Reference Error
console.log(myVariable); // myVariable is not defined

// 3️⃣ Type Error
let num = 5;
num.toUpperCase(); // You cannot call toUpperCase() on a number

// 4️⃣ Logical runtime error
let arr = [1, 2, 3];
console.log(arr[5].toString()); // Accessing undefined index
