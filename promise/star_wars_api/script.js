const mainDiv = document.querySelector(".data");

let peopleArr = [];

function theLoop() {
  for (let i = 1; i <= 3; i++) {
    getCharacter(i);
  }
}

async function getCharacter(num) {
  const newObj = {};
  try {
    const response = await fetch(`https://swapi.dev/api/people/${num}/`);
    if (!response.status) {
      throw new Error(`${response.status}`);
    } else {
      const data = await response.json();
      console.log(data);
      //   populateObj(data);
      const newWorld = data.homeworld;

      //   console.log(typeof newWorld);
      const nextResponse = await fetch(newWorld);
      if (!response.status) {
        throw new Error(`${response.status}`);
      } else {
        // console.log(nextResponse);
        const newData = await nextResponse.json();
        console.log(newData);
        newObj.planet = {
          planet_population: newData.population,
          planet_origin: newData.name,
        };
      }

      newObj.name = data.name;
      newObj.height = data.height;
      newObj.hair_color = data.hair_color;
    }
  } catch (e) {
    console.log(`error ${e}`);
  }
  populateObj(newObj);
}

function populateObj(obj) {
  //   const obj = {};
  //   obj.name = data.name;
  //   obj.height = data.height;
  //   obj.hair_color = data.hair_color;
  console.log(obj);
  peopleArr.push(obj);
  console.log(peopleArr);
}

theLoop();
