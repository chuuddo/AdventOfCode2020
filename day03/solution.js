const traverse = (data, step) => {
  let x = 0;
  let y = 0;
  let n = 0;
  while (y < data.length) {
    if (data[y].charAt(x) === "#") {
      n++;
    }
    x = (x + step[0]) % data[y].length;
    y += step[1];
  }
  return n;
};

const part2steps = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

module.exports = {
  part1: (data) => traverse(data, [3, 1]),
  part2: (data) => part2steps.reduce((acc, curr) => acc * traverse(data, curr), 1),
};
