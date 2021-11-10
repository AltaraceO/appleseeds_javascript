const book = {
  name: "Mysery",
  author: "Stephen King",
  year: 1987,
};
const book2 = {
  name: "Thomas Harris",
  author: "Red Dragon",
  year: 1981,
};

const bookUtils = {
  getFirstPublished(x, y) {
    x > y ? console.log(x) : console.log(y);
  },
  setNewEdition: function (x, year) {
    x.latestEdition = year;
  },
  setLanguage: function (y, language) {
    y.lang = language;
  },
  setTranslation: function (x, lang, trans) {
    x.translation = { transLang: lang, translator: trans };
  },
  setPublisher: function (x, name, location) {
    x.publisher = { name: name, location: location };
  },
  isSamePublisher: function (x, y) {
    x.publisher &&
    y.publisher &&
    x.publisher.name.toString() === y.publisher.name.toString()
      ? console.log("yes")
      : console.log("no");
  },
};

bookUtils.getFirstPublished(book.year, book2.year);

bookUtils.setNewEdition(book, book.year);
console.log(book);
bookUtils.setNewEdition(book, 1999);
bookUtils.setNewEdition(book, 2003);
bookUtils.setLanguage(book, "English");
bookUtils.setTranslation(book, "Hebrew", 999);
// bookUtils.setPublisher(book, "Viking Press", "New York");
// bookUtils.setPublisher(book2, "Viking Press", "New York");
// bookUtils.setPublisher(book2, "Penguin", "New York");
bookUtils.isSamePublisher(book, book2);
// console.log(book.publisher.name.toString());

console.log(book.publisher && book2.publisher && 5);
