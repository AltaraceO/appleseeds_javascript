// less than 50m -- english -- not an island

function countryToLive(lang, isIsland, popu, country) {
  let island = !isIsland;
  let population = popu < 50;
  let language = lang === "English";

  if (island && population && language) {
    console.log(`You should live in ${country}.`);
  } else {
    console.log(`${country} does not meet your criteria.`);
  }
}

countryToLive("English", true, 67, "UK");
countryToLive("English", false, 38, "Canada");
countryToLive("Swedish", false, 10, "Sweden");
