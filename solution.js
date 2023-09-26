const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every(num => num >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every(word => word.length < 7);
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter(num => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter(word => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find(num => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find(word => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex(num => num % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < 2) {
      return i; // Return the index of the first word with length less than 2
    }
  }
  return -1; // Return -1 if no such word is found
};

// For Each

const logValuesTimes3 = () => {
  nums.forEach(num => console.log(num * 3));
};

const logWordsWithExclamation = () => {
  words.forEach(word => {
    console.log(word + "!");
  });
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return arrayValues.map((value, index) => {
    return value * value * index;
  });
};

const arrayWordsUpcased = () => {
  return words.map(word => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return numbers.some(number => number % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some(word => word.includes("a"));
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
