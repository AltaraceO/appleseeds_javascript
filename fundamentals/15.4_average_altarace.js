function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));
// 1 invalid or unexpected token, red sign

// 2 the sum was undefined manking it a NaN with every loop.

// the returned sum was not devided by the length of the array .
