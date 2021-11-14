const firstObj = {
  name: "bob",
};
const secondObj = {
  name: "bertha",
};
const thirdObj = {
  name: "blanch",
};

const firstMap = new Map();

firstMap.set(firstObj, 23).set(secondObj, 24).set(thirdObj, 25);

console.time("maploop");

for (let [key, val] of firstMap) {
  console.log(key.name, val);
}
console.timeEnd("maploop");
