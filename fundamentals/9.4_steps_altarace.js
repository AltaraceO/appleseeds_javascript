function hash(n) {
  let pound = "#";
  let star = "*";
  let end = "";

  for (let j = 0; j < n - 1; j++) {
    end += star;
  }

  for (let i = 0; i < n; i++) {
    console.log(`${pound}${end}`);

    pound += "#";
    end = end.slice(0, -1);
  }
}

hash(5);

function steps(n) {
  let matrix = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i] += "#";
      matrix[i][j] += "*";
    }
    return matrix;
  }
}

console.log(steps(4));
