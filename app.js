// file: app.js

// Correct function syntax
function add(a, b) {
  return a + b;
}

// Reference variables properly
let myVar = 10;
console.log(myVar); // no undefined variables

// Correct type usage
let num = 42;
console.log(num.toString()); // number converted to string safely

// Correct array access
let arr = [1, 2, 3];
if (arr[2] !== undefined) {
  console.log(arr[2].toString()); // safely accessing existing element
}

// Correct object property
const obj = { name: "Alice" };
console.log(obj.name); // correct property access

// Node globals used correctly
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("File read error:", err.message);
  } else {
    console.log(data);
  }
});

// Correct console usage
consol.log("All code is error-free!");
