const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arrNum) => {
  //
  return arrNum.every(ele => ele >=2)
};

const isEveryWordShorterThan7 = (arrWords) => {
  //
  return arrWords.every(ele => ele.length < 7)

};

// Filter

const arrayLessThan5 = (arrWords) => {
  //
  return arrWords.filter(ele => ele < 5)
};

const arrayOddLengthWords = (arrWords) => {
  //
  return arrWords.filter(ele => ele.length % 2 !== 0)

};

// Find

const firstValDivisibleBy4 = (arrNum) => {
  //
  return arrNum.find(ele => ele % 4 === 0)

};

const firstWordLongerThan4Char = (arrWords) => {
  //
  return arrWords.find(ele => ele.length > 4)

};

// Find Index

const firstNumIndexDivisibleBy3 = (arrNum) => {
  //
  return arrNum.findIndex(ele => ele % 3 === 0)

};

const firstWordIndexLessThan2Char = (arrWords) => {
  //
  return arrWords.findIndex(ele => ele.length <2)

};

// For Each

const logValuesTimes3 = (arrNum) => {
  //
  return arrNum.forEach(ele => console.log(ele * 3))

};

const logWordsWithExclamation = (arrWords) => {
  //
  return arrWords.forEach(ele => console.log(ele+"!"))

};

// Map

const arrayValuesSquaredTimesIndex = (arrNum) => {
  //
  return arrNum.map((ele, i) => (ele * ele) * i)

};

const arrayWordsUpcased = (arrWords) => {
  //
  return arrWords.map(ele => ele.toUpperCase())

};

// Some

const areSomeNumsDivisibleBy7 = (arrNum) => {
  //
  return arrNum.some(ele => ele % 7 === 0) 

};

const doSomeWordsHaveAnA = (arrWords) => {
  //
  return arrWords.some(ele => ele.includes("a"))

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
