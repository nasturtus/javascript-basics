var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 2 ---------------------- */
// Write a Javascript function to find the most frequent item of an array. It should return a string denoting the item and the number of times it occurs in the array. (Sample input: [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3], expected output : 'a (5 times)')

function mostFrequentItem(arr) {
  var maxCount = 0;
  var maxChr = "";
  var checkedChr = [];

  for (var i = 0; i < arr.length; i++) {
    chr = arr[i];
    chrCount = 0;

    if (checkedChr.findIndex(element => element === chr) === -1) {
      for (var j = i; j < arr.length; j++) {
        if (chr === arr[j]) {
          chrCount++;
        }
      }
      if (chrCount > maxCount) {
        maxCount = chrCount;
        maxChr = chr;
      }

      checkedChr.push(chr);
    }
  }
  return maxChr;
  //return maxChr + " (" + maxCount + " times)";
}

// uncomment the following test to run it
//assertEquals(mostFrequentItem(["a", "a", "b"]), "a");
//assertEquals(mostFrequentItem(["a", "b", "b", "b", "c", "a", "b", "a", "b"]),"b");
//assertEquals(mostFrequentItem(["yes", "yes", "no", "no", "yes"]), "yes");

/* ---------------------- EXERCISE 3 ---------------------- */
// Write a Javascript function to remove duplicate items from an array (ignore case sensitivity). (Sample input : [1, 'a', 'A', 'b', 2, 2], expected output: [1, 'a', 'b', 2])
function allToLowerCase(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr;
}

function removeDuplicateItems(arr) {
  var uniqItems = [];

  arr = allToLowerCase(arr);

  for (var i = 0; i < arr.length; i++) {
    if (uniqItems.findIndex(element => element === arr[i]) === -1) {
      uniqItems.push(arr[i]);
    }
  }
  return uniqItems;
}

assertEquals(removeDuplicateItems([1, 1, "a"]), [1, "a"]);
assertEquals(removeDuplicateItems([1, 1, "a", "A"]), [1, "a"]);
assertEquals(removeDuplicateItems([1, "a", "A", "b", "B", 2, 2]), [
  1,
  "a",
  "b",
  2
]);

// ASSIGNMENTS FROM THE REVISED SET OF ARRAY ASSIGNMENTS

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
  var total = 0;
  array.forEach(element => {
    total += element;
  });
  return total;
}

assertEquals(sum([1, 2, 3, 4]), 10);
assertEquals(sum([10, 10, 10]), 30);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
  var evenNumbers = [];
  evenNumbers = array.filter(number => number % 2 === 0);
  return evenNumbers;
}

assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier!
function sumEvenNumbers(array) {
  var evenNumbers = evenNumbersOnly(array);
  return sum(evenNumbers);
}

assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);
