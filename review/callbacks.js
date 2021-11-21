function greet(person) {
  console.log(`good evening ${person}`);
}

function quotation(name, callback) {
  name = `"${name}"`;
  if (typeof callback !== "function") {
    throw new TypeError(`"${callback}" is not a function`);
  } else {
    callback(name);
  }
}

quotation("Liad", greet);

const numbers = [1, 100, 67, -5, 6784, 356, 200];

function decimal(sum, decimal) {
  return sum.toFixed(decimal);
}

function divide(sum, length, callback) {
  sum = sum / length;

  if (typeof callback !== "function") {
    throw new TypeError(`Dat ${callback} ain't no function`);
  } else {
    return callback(sum, 2);
  }
}

function addNumbers(arr, callback) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (typeof callback !== "function") {
    return sum;
  }
  return callback(sum, arr.length, decimal);
}

console.log(addNumbers(numbers, divide));
