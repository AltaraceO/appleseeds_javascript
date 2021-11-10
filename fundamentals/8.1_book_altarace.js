const bookFirst = {
  author: "Jane Doe",
  "book-name": "Mystery",
  publisher: "Penguin",
  "issue-date": 1983,
  isbnNum: 38421392375,
  descirbe() {
    console.log(
      `The book ${this["book-name"]} was written in ${this["issue-date"]} by ${this.author}.`
    );
  },
};

bookFirst.descirbe();
