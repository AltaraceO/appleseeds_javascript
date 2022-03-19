const numbers = [3, 5, 7, 9, 11];

//*1st arg is the total, what it will return -- 2nd is the current item it is looping through.

//!first - 3 + 5 = 8
//!second - 8 + 7 = 15
//!third - 15 + 9 = 24
//!fourth - 24 + 11 = 35

const total = numbers.reduce((accum, currentVal) => {
  return accum + currentVal;
});

console.log(total);

//*find the max

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

//MAX = MEMORY
//CURRENT = CURRENT LOOP
const maxGrade = grades.reduce((max, current) => {
  //*Whatever is returned will turn into MAX
  if (current > max) return current;
  return max;
});

console.log(maxGrade);

//*Same as above only using Math.max and Math.min instead of if!

const maxMathGrad = grades.reduce((max, curr) => {
  return Math.max(max, curr);
});

const minMathGrad = grades.reduce((max, curr) => {
  return Math.min(max, curr);
});

console.log(maxMathGrad);
console.log(minMathGrad);

//! Starting Val

const sum = [10, 20, 30, 40, 50].reduce((sum, curr) => {
  return sum + curr;

  //!start @ 100
}, 10000);

console.log(sum);

//*reduce into an object

const votes = [
  "y",
  "n",
  "n",
  "n",
  "n",
  "y",
  "y",
  "y",
  "n",
  "n",
  "n",
  "n",
  "n",
  "y",
  "y",
  "y",
  "y",
  "y",
  "n",
  "y",
  "y",
  "y",
  "n",
  "n",
  "n",
  "n",
  "n",
];

//!starting value will be an object!
const results = votes.reduce((memory, curr) => {
  //*another option below
  //*   memory[curr] = (memory[curr] || 0) + 1;
  memory[curr] ? memory[curr]++ : (memory[curr] = 1);
  return memory;
}, {});

console.log(results);
