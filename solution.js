const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num >= 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7 )
};

// Filter

const arrayLessThan5 = () => {
 let lessThanFive = nums.filter((num) => num < 5)
return lessThanFive
};

const arrayOddLengthWords = () => {
 oddWords = words.filter((word) => word.length % 2 === 1)
 return oddWords
};

// Find

const firstValDivisibleBy4 = () => {
  found = nums.find((num) => num % 4 === 0)
  return found
};

const firstWordLongerThan4Char = () => {
found = words.find((word) => word.length > 4)
return found
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
const divisbleByThree = (num) => num % 3 === 0
return nums.findIndex(divisbleByThree)
};

const firstWordIndexLessThan2Char = () => {
const lessThanTwo = (word) => word.length < 2 
return words.findIndex(lessThanTwo)
};

// For Each

const logValuesTimes3 = () => {
return nums.forEach((num) => num * 3 )
};

const logWordsWithExclamation = () => {
  return words.forEach((word => word + "!")) 
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num, index) => num ** 2 * index);
};

const arrayWordsUpcased = () => {
return words.map((word) => word.toUpperCase())

};

// Some

const areSomeNumsDivisibleBy7 = () => {
  const divisbleBySeven = (num) => num % 7 === 0;
  return (nums.some(divisbleBySeven))
};

const doSomeWordsHaveAnA = () => {
const withA = (word) => word.includes("a")
return (words.some(withA))
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
