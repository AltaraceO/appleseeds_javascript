setInterval(stopwatch, 1000);

let hr = 0;
let min = 0;
let sec = 0;

function stopwatch() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hr++;
    }
  }
  console.log(hr, min, sec);
}
