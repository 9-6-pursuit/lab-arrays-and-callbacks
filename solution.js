const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
  return nums.every((num)=>{
    return num > 2
  })
};

const isEveryWordShorterThan7 = (arr) => {
  //
  return arr.every((word) =>{
    return word.length < 7
  })

};

// Filter

const arrayLessThan5 = (nums) => {
  //
  return nums.filter((num)=>{
    return num < 5
  })
};

const arrayOddLengthWords = (words) => {
  //
  return words.filter((word)=>{
    return word.length % 2 === 1
  })
};

// Find

const firstValDivisibleBy4 = (nums) => {
  //
  return nums.find((num)=>{
    return num % 4 === 0
  })
};

const firstWordLongerThan4Char = (words) => {
  //
  return words.find((word) => {
    return word.length > 4
  })
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  //
  return nums.findIndex((num) => {
    return num % 3 === 0
  })
};

const firstWordIndexLessThan2Char = (words) => {
  //
  return words.findIndex((word) => {
    return word.length < 2
  })
};

// For Each

const logValuesTimes3 = (nums) => {
  //
  return nums.forEach((num) => {
    console.log(num * 3) 
  })
};

const logWordsWithExclamation = (words) => {
  //
  return words.forEach((word) => {
    console.log(word + "!")
  })
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  //
  return nums.map((num) => {
    return num * num * nums.indexOf(num)
  })
};

const arrayWordsUpcased = (words) => {
  //
  return words.map((word) => {
    return word.toUpperCase()
  })
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  //
  return nums.some((num) => {
    return num % 7 === 0
  })
};

const doSomeWordsHaveAnA = (word) => {
  //
  return words.some((word) => {
    return word.toLowerCase().includes("a") 
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
