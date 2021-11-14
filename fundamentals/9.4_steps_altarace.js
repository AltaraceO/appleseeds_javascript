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
  for (let i = 0; i < n; i++) {
    let matrix = "";

    for (let j = 0; j < n; j++) {
      if ([i] >= [j]) {
        matrix += "#";
      } else {
        matrix += "*";
      }
    }
    console.log(matrix);
  }
}

console.log(steps(5));
