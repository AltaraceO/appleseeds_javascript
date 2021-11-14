const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compare(x, y) {
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      //   console.log(x[i], y[j]);
      x[i] === y[j] ? console.log(`${x[i]} = ${y[j]}`) : console.log(`miss`);
    }
  }
}

console.log(compare(food, food1));
