// * PART 1

const arrInt = [2, 4, 5, 6, 7, 44];

const double = arrInt.map(function (num) {
  return [num * 2];
});

console.log(double);

// * PART 2

const onlyEvenVal = [];

arrInt.forEach(function (num) {
  if (num % 2 === 0) {
    onlyEvenVal.push(num);
  }
});

console.log(onlyEvenVal);

// * PART 3

const words = ["returned", "array", "function", "elements"];

const firstLast = [];

words.forEach(function (str, idx, array) {
  if (idx === 0 || idx === array.length - 1) {
    firstLast.push(str);
  }
});

console.log(firstLast);

// * PART 4

const vowel = ["touloureenisable"];
let newVowelStr = vowel.toString().toLowerCase().split("");
let vowelObject = {};

newVowelStr.forEach(function (let) {
  if (let === "e" || let === "a" || let === "i" || let === "o" || let === "u") {
    vowelObject[let] = vowelObject[let] ? ++vowelObject[let] : 1;
  }
});

console.log(vowelObject);

// PART 5
const capitalStr = "helloworld";

const mapCapital = capitalStr.split("").map(function (let) {
  return let.toUpperCase();
});

console.log(mapCapital.join(""));

// PART 6

let alpha = "zabcdefghijklmnopqrstuvwxyz";
let alphaSplit = alpha.split("");

const shiftString = "this is not a test";

const shiftyMap = shiftString.split("").map(function (let) {
  if (alphaSplit.includes(let) === true) {
    //   *turn the digit back to a letter by nesting []->[]
    return alphaSplit[alphaSplit.indexOf(let) - 1];
  } else {
    return " ";
  }
});

console.log(shiftyMap.join(""));

// PART 7

let capWords = "a string where every other word is capitalized";

let wordsCapped = [];

capWords.split(" ").forEach(function (word, idx) {
  if (idx % 2 === 0) {
    wordsCapped.push(word.toUpperCase());
  } else {
    wordsCapped.push(word);
  }
});

console.log(wordsCapped.join(" "));
