const mainDiv = document.querySelector(".data");

let peopleArr = [];

function theLoop() {
  for (let i = 1; i <= 3; i++) {
    getCharacter(i);
  }
}

async function getCharacter(num) {
  const response = await fetch(`https://swapi.dev/api/people/${num}/`);
  try {
    if (!response.status) {
      throw new Error(`${response.status}`);
    } else {
      const data = await response.json();
      console.log(data);
      populateObj(data);
    }
  } catch (e) {
    console.log(`error ${e}`);
  }
}

function populateObj(data) {
  const obj = {};
  obj.name = data.name;
  peopleArr.push(obj);
  console.log(peopleArr);
}

theLoop();
