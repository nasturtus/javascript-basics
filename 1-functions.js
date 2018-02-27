var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}

assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(personName) {
  if (arguments.length == 0) {
    return "hello world";
  } else {
    console.log("here");
    return "hello " + personName;
  }
}

assertEquals(greet("tom"), "hello tom");
assertEquals(greet(), "hello world");

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
function add2Numbers(num1, num2) {
  return num1 + num2;
}

assertEquals(add2Numbers(1, 1), 2);
assertEquals(add2Numbers(100, 1), 101);

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted

function invertCase(str) {
  var arr = str.split("");
  var strWithInvertedCase = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90) {
      strWithInvertedCase += arr[i].toLowerCase();
    } else if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
      strWithInvertedCase += arr[i].toUpperCase();
    } else {
      strWithInvertedCase += arr[i];
    }
  }
  return strWithInvertedCase;
}
assertEquals(invertCase("Hello"), "hELLO");
assertEquals(invertCase("hELLO wORLD"), "Hello World");
