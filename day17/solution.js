const getNeighbours3d = (cube) => {
  const result = [];
  const [x, y, z] = cube.split(";").map(Number);
  for (let dz = -1; dz <= 1; dz++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!(dx === 0 && dy === 0 && dz === 0)) {
          result.push(`${x + dx};${y + dy};${z + dz}`);
        }
      }
    }
  }
  return result;
};

const getNeighbours4d = (cube) => {
  const result = [];
  const [x, y, z, w] = cube.split(";").map(Number);
  for (let dw = -1; dw <= 1; dw++) {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!(dx === 0 && dy === 0 && dz === 0 && dw === 0)) {
            result.push(`${x + dx};${y + dy};${z + dz};${w + dw}`);
          }
        }
      }
    }
  }
  return result;
};

function circle(activeCubes, getNeighbours) {
  const cubes = new Set();
  for (const cube of activeCubes) {
    getNeighbours(cube).forEach((x) => cubes.add(x));
  }
  const result = new Set();
  for (const cube of cubes) {
    const activeCount = getNeighbours(cube).reduce((acc, x) => (activeCubes.has(x) ? acc + 1 : acc), 0);
    if (activeCubes.has(cube) ? activeCount === 2 || activeCount === 3 : activeCount === 3) {
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

const solve = (data, dimensions, getNeighbours) => {
  let active = getActive(data, dimensions);
  for (let i = 0; i < 6; i++) {
    active = circle(active, getNeighbours);
  }
  return active.size;
};

module.exports = {
  part1: (data) => solve(data, 3, getNeighbours3d),
  part2: (data) => solve(data, 4, getNeighbours4d),
};
