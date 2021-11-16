// A
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

foods.sort();

//*Another option is to reverse --
// foods.reverse();

foods.sort(function (a, b) {
  return a > b ? -1 : 1;
});

console.log(foods);

// B

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

foodsWithUpperCase.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(foodsWithUpperCase);

// C

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

words.sort(function (a, b) {
  return b.length - a.length;
});

console.log(words);

// D First letter sort

const firstLetter = [
  "falafel",
  "Sabich",
  "sbich",
  "zummus",
  "pizza with extra pineapple",
];

firstLetter.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();

  console.log(a[0], b[0]);

  if (a[0] < b[0]) {
    return 1;
  }
  if (a[0] > b[0]) {
    return -1;
  }
  return 0;
});

console.log(firstLetter);
