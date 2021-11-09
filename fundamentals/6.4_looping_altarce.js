const populations = [350, 38, 10, 9];

const precentageOfWorld = function (population) {
  let percentage = (population / 7900) * 100;
  return percentage;
};

function arrPercent(arr) {
  let allPercentages = [];
  for (let i = 0; i < arr.length; i++) {
    allPercentages.push(precentageOfWorld(arr[i]));
  }

  return allPercentages;
}

console.log(arrPercent(populations));
