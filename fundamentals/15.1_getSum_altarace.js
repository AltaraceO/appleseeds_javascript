function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }

  return sum;
}
// getSum([1, 2, 3], [(5, 66, 23)]);

console.log(getSum([1, 2, 3], [(5, 66, 23)]));

// 1 -- in the dev tools, under sources, it indicated that arr1 was of undefined length. there was a comma missing  separating the the two arrays in line 10

// 2 in line four, the debugger indicated that there was an assignment to a constant variable in line 2 (const sum =0 changed to let)
