const teamMike = [8955, 12055, 10355];
const teamJohn = [92227, 122234, 435];
const teamMary = [92227, 122234, 432105];

function av(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let div = sum / arr.length;

  return Math.round(div);
}

console.log(av(teamMary));

function winner(a, b, c) {
  let x = av(a);
  let y = av(b);
  let z = av(c);

  if (x > y && x > z) {
    console.log(`team x is the winner with ${x} points`);
  } else if (y > x && y > z) {
    console.log(`team y is the winner with ${y} points`);
  } else if (z > x && z > y) {
    console.log(`team z is the winner with ${z} points`);
  } else if (x === y || x === z || y === z) {
    console.log("we have a tie");
  }
}

winner(teamMary, teamJohn, teamMike);
