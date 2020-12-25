const getLoopSize = (subject, target) => {
  let current = 1;
  let loop = 0;
  while (current !== target) {
    current = (current * subject) % 20201227;
    loop++;
  }
  return loop;
};

const transform = (subject, loopSize) => {
  let current = 1;
  for (let i = 0; i < loopSize; i++) {
    current = (current * subject) % 20201227;
  }
  return current;
};

module.exports = {
  part1: (data) => {
    const [door, card] = data.split("\n").map(Number);
    return transform(card, getLoopSize(7, door));
  },
  part2: () => 0,
};
