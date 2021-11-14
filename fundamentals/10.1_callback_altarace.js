// PART 1

function isString(str, func) {
  if (typeof str === "string") {
    func(str);
  }
}

function logs(x) {
  console.log(x);
}

isString("is this a string?", logs);
isString(99878, logs);

// PART 2

function firstWordUpperCase(str, func) {
  str = str.split(" ");
  let first = str[0].toUpperCase();
  str.shift();
  str = str.join(" ");
  let word = first + " " + str;

  return func(word);
}

function dash(sentence) {
  return sentence.split(" ").join("-");
}

console.log(firstWordUpperCase("first word upper case", dash));

//PART 3

function crazyCase(str) {
  newStr = [];
  for (let i = 0; i < str.length; i++)
    if (str[i] === " ") {
      newStr.push(" ");
    } else if ([i] % 2 === 0) {
      newStr.push(str[i].toUpperCase());
    } else {
      newStr.push(str[i].toLowerCase());
    }

  return newStr.join("");
}

console.log(firstWordUpperCase("first word upper case", crazyCase));

// PART 4

function myFunc(x, func) {
  let random;
  while (toNumber(x) !== random) {
    random = Math.floor(Math.random() * 10) + 1;
    console.log("not yet");
  }

  return `Number : ${x} random : ${random}`;
}

function toNumber(n) {
  n = Number(n);
  return n;
}

console.log(myFunc("9"));
