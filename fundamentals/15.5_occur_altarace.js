function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));

// scrolling through the loop i noticed that the counter number isnt adding up and then saw that it was +1 and not ++
