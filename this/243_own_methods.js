// 1 - filter method

Array.prototype.myFilter = function (fn) {
  const passed = [];

  for (let i of this) {
    if (fn(i)) {
      passed.push(i);
    }
  }
  return passed;
};

let checking = [1, 3, 4, 6].myFilter((e) => {
  if (e % 2 === 0) return e;
});

console.log(checking);

// 2 - find method

Array.prototype.myFind = function (fn) {
  const found = [];

  for (let i of this) {
    if (fn(i)) {
      found.push(i);
      break;
    }
  }
  if (found.length === 0) {
    return undefined;
  } else {
    return found;
  }
};

let finding = [11, 31, 41, 6].myFind((e) => {
  if (e < 5) return e;
});

console.log(finding);
