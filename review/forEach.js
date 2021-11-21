words = ["one", "two", "three", "four", "five"];

words.forEach((wrd, idx) => {
  console.log(wrd, idx);
});

function toNumber(arr) {
  newArr = [];
  words.forEach((wrd, idx) => {
    newArr.push(idx + 1);
  });
  console.log(typeof newArr);
  return newArr;
}

console.log(toNumber(words));

const fruits = ["mango", "papaya", "pineapple", "apple"];

fruits.forEach((fruit) => {
  console.log();
});
