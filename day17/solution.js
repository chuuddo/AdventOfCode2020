function getCombinations(items, length) {
  if (length === 1) return items.map((item) => [item]);
  return items.flatMap((item) => getCombinations(items, length - 1).map((x) => [item, ...x]));
}

function circle(activeCubes, getNeighbours) {
  const counts = new Map();
  for (const cube of activeCubes) {
    getNeighbours(cube).forEach((x) => counts.set(x, (counts.get(x) || 0) + 1));
  }
  const result = new Set();
  for (const [cube, count] of counts) {
    if ((activeCubes.has(cube) && count === 2) || count === 3) {
      result.add(cube);
    }
  }
  return result;
}

const getActive = (data, dimensions) => {
  const active = new Set();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === "#") {
        active.add([j, i, ...Array(dimensions - 2).fill(0)].join(";"));
      }
    }
  }
  return active;
};

const solve = (data, dimensions) => {
  const directions = getCombinations([-1, 0, 1], dimensions).filter((x) => !x.every((n) => n === 0));
  const getNeighbours = (cube) => {
    const values = cube.split(";").map(Number);
    return directions.map((x) => x.map((delta, i) => delta + values[i]).join(";"));
  };
  let active = getActive(data, dimensions);
  for (let i = 0; i < 6; i++) {
    active = circle(active, getNeighbours);
  }
  return active.size;
};

module.exports = {
  part1: (data) => solve(data, 3),
  part2: (data) => solve(data, 4),
};
