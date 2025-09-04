<?php
// file: correct-sample.php

// Correct syntax
echo "Hello World";  // semicolon added

// Defined variables
$definedVar = "I exist!";
echo $definedVar;

// Type-safe operations
$number = 10;
$stringNumber = (string)$number;  // safely convert number to string
echo $stringNumber;

// Calling only defined functions
function sayHello($name) {
    echo "Hello, " . $name . "!";
}

sayHello("Alice");

// Array and object access
$arr = [1, 2, 3];
echo $arr[0];  // safe access

$obj = (object)["name" => "Bob"];
echo $obj->name;  // safe access
