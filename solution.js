const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numbers) => {
return numbers.every((number)=> number > 2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = (array) => {
  return array.filter((element) => element < 5)
};

const arrayOddLengthWords = (array) => {
  return array.filter((word) => word.length % 2 !==0)
};

// Find

const firstValDivisibleBy4 = (array) => {
  return array.find((number) => number % 4 ===0)
};

const firstWordLongerThan4Char = (array) => {
  return array.find((word) => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (array) => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
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
