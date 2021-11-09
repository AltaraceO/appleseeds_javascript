const people = ["Greg", "Mary", "Devon", "James"];

// 1

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2

people.shift();

// 3

people.pop();

// 4
people.unshift("Matt");
// 5
people.push("Ori");
// 6
for (let i = 0; i <= 1; i++) {
  console.log(people[i]);
}
// 7
const peopleCopy = people.slice(2, 4);
console.log(peopleCopy);
// 8
console.log(people.indexOf("Mary"));
// 9
console.log(people.indexOf("foo"));
// 10

const peopleAgain = ["Greg", "Mary", "Devon", "James"];

peopleAgain.splice(2, 1, "Elisabeth", "Artie");
console.log(peopleAgain);
// 11

const withBob = peopleAgain.concat("Bob");
console.log(withBob);
