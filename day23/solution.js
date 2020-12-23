function* getIterator(circle, start) {
  let current = start;
  for (let i = 0; i < circle.length - 1; i++) {
    yield current;
    current = circle[current];
  }
}

const createCircle = (array) => {
  return array.reduce((acc, cur, i, arr) => {
    acc[cur] = arr[(i + 1) % arr.length];
    return acc;
  }, new Uint32Array(array.length + 1));
};

const move = (circle, current, max) => {
  const pick1 = circle[current];
  const pick2 = circle[pick1];
  const pick3 = circle[pick2];
  circle[current] = circle[pick3];
  let destination = current;
  do {
    destination -= 1;
    if (destination < 1) destination = max;
  } while (destination === pick1 || destination === pick2 || destination === pick3);
  circle[pick3] = circle[destination];
  circle[destination] = pick1;
  return circle[current];
};

const solve = (cups, moves, max) => {
  const circle = createCircle(cups);
  let current = cups[0];
  for (let i = 0; i < moves; i++) {
    current = move(circle, current, max);
  }
  return circle;
};

module.exports = {
  part1: (data) => {
    const cups = Uint32Array.from(data);
    const circle = solve(cups, 100, Math.max(...cups));
    return Number([...getIterator(circle, 1)].slice(1).join(""));
  },
  part2: (data) => {
    const max = 1000000;
    const cups = Uint32Array.from({ length: max }, (_, i) => i + 1);
    Uint32Array.from(data).forEach((x, i) => {
      cups[i] = x;
    });
    const circle = solve(cups, 10000000, max);
    return circle[1] * circle[circle[1]];
  },
};
