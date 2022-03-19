//*includes
let foods = ["water", "ice", "everything", "nice", "beige"];

console.log(foods.includes("ice"));
//*will it include it after a certain index
console.log(foods.includes("ice", 4));

//*indexOf! if it finds it, will tell you which index it was found !!

console.log(foods.indexOf("nice"));
//*if not found it will return -1
console.log(foods.indexOf("wow"));
