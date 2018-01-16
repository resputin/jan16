'use strict';

// function repeat(fn, n){
//   for (let i = 0; i < n; i++) {
//     fn();
//   }
// }

// function hello() {
//   console.log("Hello World");
// }

// function goodbye() {
//   console.log("Goodbye World");
// }

// repeat(hello, 5);
// repeat(goodbye, 5);
// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'

//-------------------------------------------------------------------
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr,fn) {
//   const newArray=[];
//   for(let i=0;i<arr.length;i++){
//     if(fn(arr[i])){
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;

// }
// function checkFirstLetter(word){
//   return word[0]==='R';
// }

// console.log(filter(myNames,checkFirstLetter));


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
}

const warning1 = hazardWarningCreator("Rocks on the road");
const warning2 = hazardWarningCreator("Icy roads");
const warning3 = hazardWarningCreator("Don't fall off the cliff");

warning1("Here");
warning1("Here");