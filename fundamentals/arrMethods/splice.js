let foods = ["water", "ice", "everything", "nice", "beige"];
console.log(foods);
foods.splice(1, 0, "milk");
console.log(foods);

//*if i were to delete anything it would return those deleted values

console.log(foods.splice(3, 2));
console.log(foods);

//*add something after 2 and delete none!!
foods.splice(2, 0, "carrots", "beans");
console.log(foods);
