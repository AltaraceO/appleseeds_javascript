const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};

function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return getStrength();
}

whoIsStronger(hero.getStrength);

console.log(hero.getStrength());

let newStrength = whoIsStronger(hero.getStrength.bind(hero));

// let whoStrength = whoIsStronger.bind(hero.getStrength);
// console.log(newStrength(hero.getStrength));
// console.log(whoStrength(newStrength));

console.log(newStrength);
