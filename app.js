// Simple Node.js code with error
const fs = require('fs');

// Trying to read a non-existent file
fs.readFile('nonexistent.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error occurred: " + err.message);
    } else {
        console.log(data);
    }
});

// Intentional typo error
consol.log("This line has a typo!"); // Should be console.log
