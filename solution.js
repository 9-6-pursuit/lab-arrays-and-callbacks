const { nums, words } = require("./data/data.js");

// Every
// Is every number is greater than or equal to 2
const isEveryNumGreaterThan2 = (nums) => {
 let result = nums.every(num => num >= 2)
  return result
};

//Is every word is shorter than 7 characters
const isEveryWordShorterThan7 = (words) => {
  let result = words.every(word => word.length < 7)
  return result
};

// Filter
//A new array with all values less than 5 
const arrayLessThan5 = (nums) => {
  let result = nums.filter(num => num < 5) 
  return result
};

//A new array with all words with odd lengths
const arrayOddLengthWords = (words) => {
  let result = words.filter(word => word.length % 2 === 1)
  return result
};

// Find
//Find first value that is divisible by 4
const firstValDivisibleBy4 = (nums) => {
  let result = nums.find(num => num % 4 === 0)
  return result
};

//Find first word longer than 4 characters
const firstWordLongerThan4Char = (words) => {
  let result = words.find(word => word.length > 4)
  return result
};

// Find Index
//Find the index of the first number that is divisible by 3
const firstNumIndexDivisibleBy3 = (nums) => {
  let result = nums.findIndex(num => num % 3 === 0)
  return result
};

//Find the index of the first word that is less than 2 characters long
const firstWordIndexLessThan2Char = (words) => {
  let result = words.findIndex(word => word < 2)
  return result
};

// For Each
//Console log the values times 3
const logValuesTimes3 = (nums) => {
  let result = nums.forEach(num => num * 3)
  return result
};

//Console log each word with an exclamation point
const logWordsWithExclamation = (words) => {
  let result = words.forEach(word => word.includes("!"))
  return result
};

// Map
//A new array of values that are squared and then multiplied by their index number
const arrayValuesSquaredTimesIndex = (nums) => {
  const square = (number) => number**2;
  let result = nums.map((num, index)=> (square(num)*index))
  return result

};
//A new array of words that are all uppercase
const arrayWordsUpcased = (words) => {
let result = words.map((word)=> word.toUpperCase())
return result
};

// Some
//Are some numbers divisible  by 7?
const areSomeNumsDivisibleBy7 = (nums) => {
  let result = nums.some(num => num % 7 === 0)
  return result
};
//Do some words have an a?
const doSomeWordsHaveAnA = () => {
  let result = words.some(word => word.includes("a"))
  return result
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
