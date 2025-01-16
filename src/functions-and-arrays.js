// Iteration 1 | Find the Maximum
function maxOfTwoNumbers() {}

// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.


function maxOfTwoNumbers(numA,numB) {
    if ( numA > numB ){
      console.log( numA );
    } else 
      console.log( numB );
  }
  
// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile","parangaricutirumicuaro", "pearl", "orchard", "crackpot"];
let wordArr = "";
let positionWord = 0;
let longestWord = 0;

function findLongestWord(words) { 

  for (let i = 0; i < words.length; i++) {
    if ( words[i].length > wordArr.length ) {
      wordArr =  words[i]; 
      positionWord = i;
    } else if ( words[i].length == "" ){
      return null;
    }
    }
  return words[positionWord];
}

longestWord = findLongestWord(words)


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) { 
  let sumTotal = 0;
 
  for (let i = 0; i < numbers.length; i++) {
     sumTotal += numbers[i]; // <-- summing the numbers from the array
  }
  
  return sumTotal; 
}

console.log (sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumber(numbers2) { 
  let sumTotal2 = 0;
   let average = 0;
  for (let j = 0; j < numbers2.length; j++) {
     sumTotal2 += numbers2[j]; // <-- summing the numbers from the array
     }
  average = sumTotal2 / numbers2.length
  return average; 
}

console.log (averageNumber(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
let toCheck = "";

function doesWordExist(words2,toCheck) {
   let result = false;
    for (let i = 0; i < words2.length; i++) {
        if ( words2[i] == toCheck ){
          result = true; 
        } 
       }
    return result;
    }

doesWordExist(words2,"machine")
console.log (doesWordExist(words2,toCheck));


const array = [2, 9, 9];
array.indexOf(2); // 0