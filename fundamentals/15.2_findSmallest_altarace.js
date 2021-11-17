function findSmalest(a, b, c) {
  if (a > b > c) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmalest(52, 66, 2));

// 1 uncaught reference error spelling in line 10 didn't match line one
