const numbers = [1, -5, 666, 2, 400, 11];
const numbersDesc = [1, -5, 666, 2, 400, 11];

numbers.sort(function (a, b) {
  return a - b;
});

numbersDesc.sort(function (a, b) {
  return b - a;
});

console.log(numbers);
console.log(numbersDesc);
