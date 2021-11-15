const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// PART 1
let namesAPI = [];

data.forEach(function (item) {
  namesAPI.push(item.name);
});

console.log(namesAPI);

// PART 2

let birthday = [];

data.forEach(function (item) {
  let birthyear = item.birthday.slice(-4);
  if (Number(birthyear) < 1990) {
    birthday.push(Number(birthyear));
  }
});

console.log(birthday);

// PART 3

const food = Object.keys(data).map(function (item) {
  return;
});
console.log(food);
// vowelObject[let] = vowelObject[let] ? ++vowelObject[let] : 1;
