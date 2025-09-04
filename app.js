// file: runtime-errors.js

// 1️⃣ Reference Error
console.log(nonExistentVar); // variable is not defined

// 2️⃣ Type Error
let num = 42;
num.toUpperCase(); // Cannot call toUpperCase() on a number

// 3️⃣ Logical runtime error
let arr = [1, 2, 3];
console.log(arr[5].toString()); // Accessing undefined element

// 4️⃣ Typo in object
const obj = { name: "Alice" };
console.log(obj.nam); // undefined property access
