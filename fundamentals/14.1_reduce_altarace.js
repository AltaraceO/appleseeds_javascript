const numbersReduce = [4, 2, 6, 100, 155];

// REDUCE MAX FUNCTION

function reduceMax(arr) {
  let max;
  arr.reduce((accume, current) => {
    if (current > accume) {
      return (max = current);
    }
    return (max = accume);
  });
  return max;
}

console.log(reduceMax(numbersReduce));

// SUM EVEN NUMBERS

function sumEven(arr) {
  let evenArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }

  evenArr.reduce((accume, current) => {
    return (sum = accume + current);
  });

  return sum;
}

console.log(sumEven(numbersReduce));

// AVERAGE

function ave(arr) {
  let sum = 0;

  arr.reduce((accume, current) => {
    return (sum = accume + current);
  });

  return sum / arr.length;
}

console.log(ave(numbersReduce));
