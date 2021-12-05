const player1 = document.querySelector("#player1-race > td");
const player2 = document.getElementById("player2-race");
const allTD = document.querySelector("div");

let tdStyle = window.getComputedStyle(player1);

const backgroundUrl = tdStyle;

console.log(backgroundUrl);

window.addEventListener("keyup", function (e) {
  console.log(e.key);

  if (e.key === "ArrowDown") {
    console.log(player1.nextSibling);
    player1.nextElementSibling.style.setProperty = backgroundUrl;
  }
});
