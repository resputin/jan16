"use strict";

function max(arr) {
  let currentMax = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > currentMax) {
      currentMax = arr[i];
    }
    i++;
  }
  return currentMax;
}

let maxArray = [15, 2, 9, 10, 5, 6];

let maxVal = max(maxArray);
console.log(maxVal);

function min(arr) {
  let currentMin = arr[0];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
    }
    i++;
  }
  return currentMin;
}

let minArray = [15, 2, 9, 10, 5, 6];

let minVal = min(minArray);
console.log(minVal);
// -------------------------------------------------------------

function average(numbers) {
  let total = 0;
  numbers.forEach(element => (total += element));
  console.log(total / numbers.length);
  return total / numbers.length;
}

average([1, 2, 3, 4, 5, 6, 7, 8]);
