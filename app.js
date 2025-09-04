// file: multi-error.js

// 1️⃣ Syntax Error
function add(a, b {   // Missing closing parenthesis
  return a + b;
}

// 2️⃣ Reference Error
console.log(myVar); // myVar is not defined

// 3️⃣ Type Error
let num = 5;
num.toUpperCase(); // Cannot call toUpperCase() on a number

// 4️⃣ Logical runtime error
let arr = [1, 2, 3];
console.log(arr[5].toString()); // Accessing undefined index
