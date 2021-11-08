const precentageOfWorld = function (population) {
  let percentage = (population / 7900) * 100;
  return percentage;
};

let israelPercentage = precentageOfWorld(9);
let usaPercentage = precentageOfWorld(350);
let finlandPercentage = precentageOfWorld(5.5);

console.log(finlandPercentage);
console.log(usaPercentage);
console.log(israelPercentage);

function percentageOfWorld2(population2) {
  let percentage = (population2 / 7900) * 100;
  return percentage;
}

let israelPercentage2 = percentageOfWorld2(9);
let usaPercentage2 = percentageOfWorld2(350);
let finlandPercentage2 = percentageOfWorld2(5.5);

console.log(finlandPercentage2);
console.log(usaPercentage2);
console.log(israelPercentage2);
