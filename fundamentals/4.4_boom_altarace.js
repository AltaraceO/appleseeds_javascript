function seven(n) {
  arr = [];
  arr2 = [];
  for (i = 0; i <= n; i++) {
    arr.push(i);
  }
  console.log(arr);
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] % 7 === 0 && String(arr[i]).includes(7)) {
      arr2.push("BOOM-BOOM");
    } else if (arr[i] % 7 === 0) {
      arr2.push("boom");
    } else {
      arr2.push(i);
    }
  }
  return arr2;
}

console.log(seven(80));
