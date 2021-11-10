const myCountry = {
  country: "The USA",
  capital: "District of Colombia",
  language: "English",
  population: "350",
  neighbors: ["Canada", "Mexico"], //[],
  descibe() {
    console.log(
      `${this.country} has ${this.population} million citizens, their official language is ${this.language}, thier capital is ${this.capital} and they have ${this.neighbors.length} neighboring countries.`
    );
  },
  checkIsIsland: function () {
    this.isIsland = !this.neighbors.length;
  },
};

myCountry.descibe();
myCountry.checkIsIsland();
console.log(myCountry);
