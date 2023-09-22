const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  //
  return arr.every((num) => {
    return num > 2
  })
};

const isEveryWordShorterThan7 = (arr) => {
  //
  return arr.every((word) => {
    return word.length < 7
  })
};

// Filter

const arrayLessThan5 = (arr) => {
  //
  return arr.filter((num) => {
    return num < 5
  })
};

const arrayOddLengthWords = (arr) => {
  //
  return arr.filter((word) => {
    return word.length % 2 !== 0
  })
};

// Find

const firstValDivisibleBy4 = (arr) => {
  //
  return arr.find((num) => {
    return num % 4 === 0
  })
};

const firstWordLongerThan4Char = (arr) => {
  //
  return arr.find((word) => {
    return word.length > 4
  })
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  //
  return arr.findIndex((num) => {
    return num % 3 === 0
  })
};

const firstWordIndexLessThan2Char = (arr) => {
  //
  return arr.findIndex((word) => {
    return word < 2
  })
};

// For Each

const logValuesTimes3 = (arr) => {
  //
  arr.forEach((num) => {
    return num * 3
  })
};

const logWordsWithExclamation = (arr) => {
  //
  arr.forEach((word) => {
    return word + '!'
  })
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  //
  let newArr = arr.map((num, index) => {
    return (num * num) * index
  })
  return newArr
};

const arrayWordsUpcased = (arr) => {
  //
  let newWordsArr = arr.map((word) => {
    return word.toUpperCase()
  })
  return newWordsArr
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  //
  return arr.some((num) => {
    return num % 7 === 0
  })
};

const doSomeWordsHaveAnA = (arr) => {
  //
  return arr.some((word) => {
    return word.includes('a')
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
