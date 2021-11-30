const box = document.querySelector(".question_box");
const statusMsg = document.querySelector(".status_message");
const keyGuessed = document.querySelector(".keys_would-you");
const wrongList = document.querySelector(".wrong_display");
const reset = document.querySelector(".game_reset");

let game = true;
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function mainGame() {
  let wrongLetters = [];
  let randomLetter = randomGenerator(alphabet);
  console.log(randomLetter);

  window.addEventListener("keypress", function letter(e) {
    if (game) {
      const entered = e.key;

      if (matchCheck(entered, randomLetter)) {
        winAndEnd(entered);
      }

      if (isNotLetter(entered)) {
        statusMsg.textContent = `Please enter a letter from a - z`;
        statusMsg.style.color = "red";
      }

      if (notMatch(entered, randomLetter)) {
        if (alreadyIncluded(entered, wrongLetters)) {
          statusMsg.textContent = `${entered} has already been guessed`;
          statusMsg.style.color = "red";
        } else {
          statusMsg.textContent = `Nope, wrong letter`;
          statusMsg.style.color = "red";
          addToArr(entered, wrongLetters);
          wrongList.innerText = wrongLetters;
        }
      }
    }
  });
}
reset.addEventListener("click", function (e) {
  resetOn();
  mainGame();
});

mainGame();

function randomGenerator(atoz) {
  return atoz[Math.floor(Math.random() * atoz.length)];
}

function matchCheck(first, second) {
  return first === second ? true : false;
}

function isNotLetter(str) {
  return !str.match(/[a-z]/) ? true : false;
}

function notMatch(first, second) {
  if (first !== second && first.match(/[a-z]/)) {
    return true;
  } else {
    return false;
  }
}

function alreadyIncluded(first, arr) {
  return arr.includes(first) ? true : false;
}

function addToArr(first, arr) {
  arr.push(first);
}

function winAndEnd(first) {
  statusMsg.textContent = "Right letter!";
  statusMsg.style.color = "green";
  box.innerText = `${first}`;
  box.style.fontSize = "30px";
  keyGuessed.innerText = "Would you like to play again?";
  reset.style.display = "block";
  wrongList.innerText = [];
  //   this.removeEventListener("keypress", letter); //removes event <--
  game = false;
}

function resetOn() {
  statusMsg.textContent = "Guess a Letter";
  statusMsg.style.color = "black";
  box.innerText = `?`;
  keyGuessed.innerText = "Keys Guessed";
  reset.style.display = "none";
  wrongList.innerText = [];
  randomLetter = randomGenerator(alphabet);
  game = true;
}
