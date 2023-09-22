const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every(num => num >= 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter(array => array < 5)
};

const arrayOddLengthWords = (oddWords) => {
  return oddWords.filter((oddWord) => oddWord.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find(num => num % 4 === 0)
};

const firstWordLongerThan4Char = (words) => {
  return words.find(word => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((num) => num % 3 === 0 )
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex(word => word.length < 2)
};

// For Each

const logValuesTimes3 = (nums) => {
  console.log(nums.forEach( num => num * 3))
};

const logWordsWithExclamation = (words) => {
  console.log(words.forEach(word => word.includes("!")))
  //{words.forEach(word => console.log(word + "!"));
};


// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num,index) => (num * index) * num)
  //nums.map((num,index) => (num * index) ** 2)
};

const arrayWordsUpcased = (words) => {
  return words.map(word => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some(num => num % 7 === 0)
};

const doSomeWordsHaveAnA = (words) => {
  return words.some(word => word.includes("A") || word.includes("a"))
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
