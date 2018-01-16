'use strict';

function repeat(fn, n){
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log("Hello World");
}

function goodbye() {
  console.log("Goodbye World");
}

repeat(hello, 5);
repeat(goodbye, 5);


// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'

//-------------------------------------------------------------------
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// //console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// TASK: DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr,fn) {
  const newArray=[];
  for(let i=0;i<arr.length;i++){
    if(fn(arr[i])){
      newArray.push(arr[i]);
    }
  }
  return newArray;

}
function checkFirstLetter(word){
  return word[0]==='R';
}

console.log(filter(myNames,checkFirstLetter));
console.log(myNames.filter(name=>name[0]==='R'));


function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;

  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    
    if (warningCounter===1){
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
    }
    else {
      console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
  };
}

const warning1 = hazardWarningCreator("Rocks on the road");
const warning2 = hazardWarningCreator("Icy roads");
const warning3 = hazardWarningCreator("Don't fall off the cliff");

warning1("Here");
warning1("Here");



const turtleArray=[[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function turtlemoves(arr){
  const positiveMoves=arr.filter(move=>move[0]>=0 && move[1]>=0);
  // console.log(positiveMoves);
  const turtleSteps=positiveMoves.map(move=>move[0]+move[1]);
  // console.log(turtleSteps);
  turtleSteps.forEach(move=>console.log(move));
}
turtlemoves(turtleArray);

let secretWords =
  "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest";

function secretMessage(str){
  let wordArray = str.split(" ");
  // console.log(wordArray);
  return wordArray.reduce(function(total, currentValue){
    // console.log(currentValue);
    if (currentValue.length === 3) {
      return total + " ";
    } else {
      // console.log(total);
      // console.log(total + currentValue[currentValue.length - 1].toUpperCase());
      return total + currentValue[currentValue.length - 1].toUpperCase();
      // 
    }
  }, "");
}
console.log(secretMessage(secretWords));


//  let wordArray = secretWords.split(" ");

//  console.log(wordArray.reduce((total, currentValue) => {
//      if (currentValue.length === 3) {
//        return total + " ";
//      } else {
//        return total + currentValue[currentValue.length - 1].toUpperCase();
//      }
//    }, ""));


// function() {
//   wordArray.reduce("NO NEED TO SHOUT");
// }