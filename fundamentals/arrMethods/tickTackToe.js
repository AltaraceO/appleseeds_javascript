const board = [
  ["x", null, "o"],
  [null, "x", "x"],
  ["o", null, "o"],
];

//*for 'o' to win!
board[2][1] = "o";
console.log(board);
