const searchButton = document.querySelector("#search");
const input = document.querySelector(".input");
const form = document.querySelector("form");
const card = document.querySelector(".cards");

let userInput = "";

function mainFunc() {
  searchButton.addEventListener("click", getInput);
}

function getInput() {
  const Name = input.value;
  console.log(Name);

  getMovie(Name);
}

async function getMovie(name) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=a78e60f4&t=${name}`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    } else {
      const data = await response.json();
      card.innerHTML = "";
      console.log(data);
      createCard(data);
    }
  } catch (e) {
    console.log(e);
  }
}

function createCard(data) {
  const img = document.createElement("img");
  img.src = data.Poster;
  img.height = 200;
  card.appendChild(img);
  const Title = document.createElement("p");
  Title.textContent = data.Title;
  card.appendChild(Title);
  const genre = document.createElement("p");
  genre.textContent = data.Genre;
  card.appendChild(genre);
  const year = document.createElement("p");
  year.textContent = data.Year;
  card.appendChild(year);
  const plot = document.createElement("p");
  plot.textContent = data.Plot;
  card.appendChild(plot);
  const director = document.createElement("p");
  director.textContent = `Director: ${data.Director}`;
  card.appendChild(director);
  const actors = document.createElement("p");
  actors.textContent = `Actors: ${data.Actors}`;
  card.appendChild(actors);
  const movieRatings = document.createElement("p");
  const rateArr = data.Ratings;
  rateArr.forEach((e) => {
    movieRatings.textContent =
      movieRatings.textContent + `  ${e.Source} : ${e.Value}  `;
    card.appendChild(movieRatings);
  });
}
mainFunc();
