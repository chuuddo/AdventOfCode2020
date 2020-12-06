const intersect = (setA, setB) => {
  const result = new Set();
  setB.forEach((item) => {
    if (setA.has(item)) {
      result.add(item);
    }
  });
  return result;
};

module.exports = {
  part1: (data) => data.reduce((count, group) => count + new Set(group.replace(/\n/g, "")).size, 0),
  part2: (data) => {
    return data.reduce((count, group) => {
      const answers = group.split("\n").map((x) => new Set(x));
      return count + answers.reduce((a, b) => intersect(a, b)).size;
    }, 0);
  },
};
