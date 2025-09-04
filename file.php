<?php
// file: error-sample.php

// 1️⃣ Syntax Error (missing semicolon)
echo "Hello World"  

// 2️⃣ Undefined variable
echo $undefinedVar;

// 3️⃣ Type Error
$number = 10;
$string = $number + "abc"; // PHP will throw a warning/error depending on strict mode

// 4️⃣ Function call error
myUndefinedFunction(); // function does not exist
