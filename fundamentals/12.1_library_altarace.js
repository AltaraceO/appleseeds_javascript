var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function availBook(arr) {
  let canRead = [];

  arr.forEach((item) => {
    if (item.readingStatus === true) {
      canRead.push({
        author: item.author,
        book: item.title,
      });
    }
  });
  return canRead;
}

console.log(availBook(library));

function findBook(arr) {
  const readableBook = arr.filter(function (item) {
    if (item.readingStatus) {
      console.log(item.author, "-", item.title);
    }
  });
}

findBook(library);
