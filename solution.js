const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
	return nums.every((n) => n > 2);
};

const isEveryWordShorterThan7 = () => {
	return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = () => {
	return nums.filter((n) => n < 5);
};

const arrayOddLengthWords = () => {
	return words.filter((word) => word.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = () => {
	return nums.find((n) => n % 4 === 0);
};

const firstWordLongerThan4Char = () => {
	return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
	return nums.findIndex((n) => n % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
	return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = () => {
	nums.forEach((n) => console.log(n * 3));
};

const logWordsWithExclamation = () => {
	words.forEach((word) => console.log(`${word}!`));
};

// Map

const arrayValuesSquaredTimesIndex = () => {
	return nums.map((n, index) => n * n * index);
};

const arrayWordsUpcased = () => {
	return words.map((word) => word.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = () => {
	return nums.some((n) => n % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
	return words.some((word) => word.includes("A") || word.includes("a"));
};

// challenges
const panagram = [
	"The",
	"quick",
	"brown",
	"fox",
	"jumps",
	"over",
	"the",
	"lazy",
	"dog",
];
const products = [
	{
		name: "fairy lights",
		price: 5.99,
		description: "festive holiday decoration",
	},
	{
		name: "banana",
		price: 0.99,
		description: "full of potassium",
	},
	{
		name: "egg separator",
		price: 3.99,
		description: "it separates yolks from whites",
	},
	{
		name: "flag",
		price: 5.99,
		description: "catches the breeze",
	},
	{
		name: "quark",
		price: 0.01,
		description: "Very small",
	},
	{
		name: "turtleneck",
		price: 19.99,
		description: "available in black and slightly-darker black",
	},
	{
		name: "mitt (leather)",
		price: 15,
		description: "regulation sized",
	},
	{
		name: "nothing",
		price: 10,
		description: "Hey, if you pay us, we won't ask any questions.",
	},
	{
		name: "violin",
		price: 2000,
		description: "Talk about a JS fiddle...",
	},
	{
		name: "yoyo",
		price: 1,
		description: "We had to pull some strings to get this one in.",
	},
];

// Add all the numbers in the array together using the reduce method
function sumAllNumbers() {
	return nums.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);
}

// Concatenate all the words using reduce
function concatenateAllWords() {
	return words.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		""
	);
}

// Try to sort without any arguments
function sortNumbersUnsorted() {
	return [...nums].sort();
}

function sortWordsUnsorted() {
	return [...words].sort();
}

// Sort the numbers in ascending order
function sortNumbersAscending() {
	return [...nums].sort((a, b) => a - b);
}

// Sort the numbers in descending order
function sortNumbersDescending() {
	return [...nums].sort((a, b) => b - a);
}

// Sort the words in ascending order
function sortWordsAscending() {
	return [...words].sort((a, b) => a.localeCompare(b));
}

// Sort the words in descending order
function sortWordsDescending() {
	return [...words].sort((a, b) => b.localeCompare(a));
}

// Test whether each letter a-z (case insensitive) is used at least once
function isPanagram() {
	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	const lowerCaseWords = panagram.join(" ").toLowerCase();
	return [...alphabet].every((letter) => lowerCaseWords.includes(letter));
}

// Filter for products with a price that is less than 10
// Sort alphabetically by product name
function filterAndSortProducts() {
	const filteredProducts = products.filter((product) => product.price < 10);
	return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
}

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

/* testing challenges

console.log(sumAllNumbers());
console.log(concatenateAllWords());
console.log(sortNumbersUnsorted());
console.log(sortWordsUnsorted());
console.log(sortNumbersAscending());
console.log(sortNumbersDescending());
console.log(sortWordsAscending());
console.log(sortWordsDescending());
console.log(filterAndSortProducts());
console.log(isPanagram());

*/