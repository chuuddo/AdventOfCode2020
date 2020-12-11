const directions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

const countOccupied = (layout, y, x, distance) => {
  return directions.reduce((count, [dy, dx]) => {
    let i = 1;
    while (layout[y + dy * i] && layout[y + dy * i][x + dx * i]) {
      const seat = layout[y + dy * i][x + dx * i];
      if (seat === "#") return count + 1;
      if (seat === "L" || i === distance) break;
      if (seat === ".") i++;
    }
    return count;
  }, 0);
};

const updateLayout = (layout, max, distance) => {
  const result = layout.map((x) => [...x]);
  let updated = false;
  for (let y = 0; y < layout.length; y++) {
    for (let x = 0; x < layout[y].length; x++) {
      const occupied = countOccupied(layout, y, x, distance);
      if (layout[y][x] === "L" && occupied === 0) {
        result[y][x] = "#";
        updated = true;
      } else if (layout[y][x] === "#" && occupied >= max) {
        result[y][x] = "L";
        updated = true;
      }
    }
  }
  return [updated, result];
};

const count = (data, max, distance) => {
  let layout = data.map((x) => x.split(""));
  let updated = true;
  while (updated) {
    [updated, layout] = updateLayout(layout, max, distance);
  }
  return layout.flat().filter((x) => x === "#").length;
};

module.exports = {
  part1: (data) => count(data, 4, 1),
  part2: (data) => count(data, 5, Infinity),
};
