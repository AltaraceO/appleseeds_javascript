function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

let squirtle = new Pokemon("squirtel", "type1", ["hit", "smack", "slap"]);

let piccachoo = new Pokemon("piccachoo", "type2", [
  "kick",
  "knock",
  "paralyze",
]);

let anotherOne = new Pokemon("third", "type3", ["verb", "noun", "adj"]);

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.name}`);
};

Pokemon.prototype.attack = function (attackNo) {
  console.log(`${this.name} used ${this.attackList[attackNo]}`);
};

piccachoo.attack(1);
squirtle.attack(2);
squirtle.callPokemon();
piccachoo.callPokemon();
