const directions = { N: [0, 1], E: [1, 0], S: [0, -1], W: [-1, 0] };

const rotatePoint = (angle, point) => {
  const n = Math.floor(Math.abs(angle) / 90);
  let [x, y] = point;
  for (let i = 0; i < n; i++) {
    [x, y] = angle > 0 ? [y, -x] : [-y, x];
  }
  return [x, y];
};

const movePoint = (point, direction, value) => {
  return [point[0] + direction[0] * value, point[1] + direction[1] * value];
};

const solve = (data, init, moveWaypoint) => {
  let { position, waypoint } = init;
  data.forEach((x) => {
    const action = x[0];
    const value = Number(x.slice(1));
    if (directions[action]) {
      if (moveWaypoint) {
        waypoint = movePoint(waypoint, directions[action], value);
      } else {
        position = movePoint(position, directions[action], value);
      }
    } else if (action === "L") {
      waypoint = rotatePoint(-value, waypoint);
    } else if (action === "R") {
      waypoint = rotatePoint(value, waypoint);
    } else if (action === "F") {
      position = movePoint(position, waypoint, value);
    }
  });
  return Math.abs(position[0]) + Math.abs(position[1]);
};

module.exports = {
  part1: (data) => solve(data, { position: [0, 0], waypoint: [1, 0] }, false),
  part2: (data) => solve(data, { position: [0, 0], waypoint: [10, 1] }, true),
};
