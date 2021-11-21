const theArr = [10, 30, 40, 60, 80, 1000];

function biggerThan(item) {
  return item > 50;
}

function myFilter(arr, callback) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let result = myFilter(theArr, biggerThan);

console.log(result);
