const names = ["james", "jim", "jennifer", "john"];

const [first, second, third] = names;

//*same as...
//*const first = names[0]
//*const second = names[1]
//*const third = names[2]

console.log(first, second, third);

const [one, , , fourth] = names;

console.log(one, fourth);
//*skip the second and get an array of the rest
const [nameOne, , ...theRestOfNames] = names;

console.log(nameOne, theRestOfNames);

//!In an OBJ you spread not based on position but on the KEY!!
const ori = { name: "ORI", likes: "cookies", hates: "crowded places" };

//*same hates as dislikes with the use of : !
const { hates: dislikes, likes } = ori;

console.log(dislikes, likes);
