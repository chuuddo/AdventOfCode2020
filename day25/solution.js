module.exports = {
  part1: (data) => {
    const [card, door] = data.split("\n").map(Number);
    let key = 1;
    let target = 1;
    while (target !== door) {
      target = (target * 7) % 20201227;
      key = (key * card) % 20201227;
    }
    return key;
  },
  part2: () => 0,
};
