const coordinates = {
  ne: [1, 1],
  nw: [-1, 1],
  se: [1, -1],
  sw: [-1, -1],
  e: [2, 0],
  w: [-2, 0],
};

const move = ([x, y], dir) => [x + coordinates[dir][0], y + coordinates[dir][1]];

const getBlackTiles = (data) => {
  return data.split("\n").reduce((acc, line) => {
    const position = line.match(/(e|se|sw|w|nw|ne)/g).reduce(move, [0, 0]);
    const key = position.join(";");
    return acc.delete(key) ? acc : acc.add(key);
  }, new Set());
};

const getNeighbours = (tile) => {
  const position = tile.split(";").map(Number);
  return Object.keys(coordinates).map((x) => move(position, x).join(";"));
};

const flip = (blackTiles) => {
  const counts = new Map();
  for (const tile of blackTiles) {
    getNeighbours(tile).forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
  }
  const result = new Set();
  for (const [tile, count] of counts) {
    if ((blackTiles.has(tile) && count === 1) || count === 2) {
      result.add(tile);
    }
  }
  return result;
};

module.exports = {
  part1: (data) => getBlackTiles(data).size,
  part2: (data) => Array.from({ length: 100 }).reduce((acc) => flip(acc), getBlackTiles(data)).size,
};
