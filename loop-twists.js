'use strict';

function max(arr){
  let currentMax = arr[0];
  let i = 0;
  while(i < arr.length) {
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