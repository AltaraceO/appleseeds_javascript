const obj = {
  first: "switch",
  second: "these",
};

const newObj = {};

function swapped(x) {
  for (let key of Object.keys(x)) {
    newObj[x[key]] = key;
  }
}

swapped(obj);

console.log(newObj);
