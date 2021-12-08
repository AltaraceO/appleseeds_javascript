const searchButton = document.querySelector("#search");
const input = document.querySelector(".input");
const form = document.querySelector("form");
const cards = document.querySelector(".cards");

let userInput = "";
let userList = [];

function mainFunc() {
  searchButton.addEventListener("click", getInput);
}

function getInput() {
  const userName = input.value;
  console.log(userName);

  getHubUser(userName);
}

async function getHubUser(name) {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    } else {
      const data = await response.json();
      if (userList.includes(data.name)) {
        throw new Error(`${data.name} is already included`);
      } else {
        userList.push(data.name);
        createCard(data);
        console.log(data);
        console.log(userList);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

function createCard(data) {
  const newCard = document.createElement("div");
  const img = document.createElement("img");
  img.src = data.avatar_url;
  img.height = 100;
  newCard.appendChild(img);
  const a = document.createElement("a");
  a.textContent = data.name;
  a.href = data.html_url;
  a.style.display = "block";=
  newCard.appendChild(a);
  const h4 = document.createElement("h4");
  h4.textContent = data.public_repos;
  newCard.appendChild(h4);
  cards.appendChild(newCard);
}
mainFunc();
