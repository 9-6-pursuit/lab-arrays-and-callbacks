const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
   return nums.every((num)=>num>2)
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((word)=>{
    return word.length < 7
  })
};

// Filter

const arrayLessThan5 = (arr) => {
  return arr.filter((num)=>num<5)
};



const arrayOddLengthWords = (words) => {
  return words.filter((word) => {
    return word.length % 2 !== 0;
  })
};

// Find

const firstValDivisibleBy4 = (array) => {
  return array.find((element) => element%4===0)
};

const firstWordLongerThan4Char = (array) => {
  return array.find((word) => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (array) => {
  return array.findIndex((num) => num%3===0)
};

const firstWordIndexLessThan2Char = (array) => {
  return array.findIndex((word)=>word.length<2)
};

// For Each

const logValuesTimes3 = (array) => {
  return array.forEach((element)=>console.log(element)*3)
};

const logWordsWithExclamation = (array) => {
  return array.forEach((word)=>word.includes("!"))
};

// Map

const arrayValuesSquaredTimesIndex = (array) => {
  return array.map((element)=> {
    return (element*element*(array.indexOf(element)))
  })
};

const arrayWordsUpcased = (words) => {
  return words.map((word)=> {
    return word.toUpperCase()
  } )
};

// Some

const areSomeNumsDivisibleBy7 = (array) => {
  return (array.some((value)=>{
    return value%7===0
  }))
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((word)=>{
    return word.includes("a")
  })
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
