let arrFill = Array(100);

arrFill.fill({ 1: 3 }, 0, 100);

console.log(arrFill);

console.log(Array.from(arrFill));

let myObject = {
  name: "Ori",
  last: "Altarace",
  city: "Haifa",
};
console.log(Object.keys(myObject));
let valuesArr = Object.values(myObject);
console.log(valuesArr);

let backValues = Object.assign({}, valuesArr);
console.log(backValues);

console.log(Array.isArray(valuesArr));
console.log(Array.isArray(backValues));
