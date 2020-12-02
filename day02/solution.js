function parseItem(item) {
  const match = item.match(/(\d+)-(\d+)\s([a-z]):\s([a-z]+)/);
  return [Number(match[1]), Number(match[2]), match[3], match[4]];
}

function isValid1(item) {
  const [start, end, letter, password] = parseItem(item);
  let n = 0;
  for (let i = 0; i < password.length; i++) {
    if (letter === password.charAt(i)) {
      n++;
    }
  }
  return n >= start && n <= end;
}

function isValid2(item) {
  const [start, end, letter, password] = parseItem(item);
  return [start, end].filter((x) => password.charAt(x - 1) === letter).length === 1;
}

module.exports = {
  part1: (data) => data.reduce((acc, curr) => (isValid1(curr) ? acc + 1 : acc), 0),
  part2: (data) => data.reduce((acc, curr) => (isValid2(curr) ? acc + 1 : acc), 0),
};
