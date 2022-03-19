const names = ["james", "john", "jan"];
const places = ["here", "there", "anywhere"];
const nameOne = "bob";
const oneName = [...nameOne];

console.log(oneName);

//*Both of these do the same thing but spreading might be a little bit clearer and more flexible.
const namesPlaces = [...names, ...places];

names.concat(places);

//* Good method to copy an array with a new place in memory
const newNames = [...names];

const newerNames = names;
names[1] = "elvis";
console.log(newerNames);

const object = { name: "ori", loves: "code" };
const secondObj = { name: "liad", loves: "code" };
//!when combining two objects and they have the same key, they will over ride!
const newObj = { ...object, ...secondObj };

console.log(newObj);

//!Because object came first! the LOVES key will override it! would be the other way around if it was written the other way around
const newOri = { ...object, loves: "cookies" };

console.log(newOri);

//! CANNOT spread an object into an array. .... however....

console.log({ ...[1, 2, 3, 4] });

//*==> { '0': 1, '1': 2, '2': 3, '3': 4 }
//this will spread and use the indexes as keys!!!
