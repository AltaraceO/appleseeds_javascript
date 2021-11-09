const arr = [1, 7, 3, 0, -5, 7, 3, 9];

// log the array values

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// return arr length without using arr.length

function arrLength(x) {
  let counter = 0;
  for (let i = 0; i < x.length; i++) {
    counter++;
  }
  console.log(counter);
}

arrLength(arr);
// func "arraySum" returns the sum of the arr

function arrSum(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  console.log(sum);
}

arrSum(arr);

// func 'arrayMulti' will multiply all the elements

function arrMulti(x) {
  let multi = 1;
  for (let i = 0; i < x.length; i++) {
    multi *= x[i];
  }
  console.log(multi);
}

arrMulti(arr);
