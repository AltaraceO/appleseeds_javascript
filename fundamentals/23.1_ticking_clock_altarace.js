setInterval(time, 1000);

function time() {
  let day = new Date();
  console.log(day.toLocaleTimeString());
}
