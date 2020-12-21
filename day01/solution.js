const target = 2020;

module.exports = {
  part1: (data) => {
    const values = {};
    for (let i = 0; i < data.length; i++) {
      const complement = target - Number(data[i]);
      if (values[complement]) {
        return complement * data[i];
      }
      values[data[i]] = 1;
    }
    return null;
  },
  part2: (data) => {
    const sorted = data.map(Number).sort((a, b) => a - b);
    for (let i = 0; i < sorted.length - 2; i++) {
      let j = i + 1;
      let k = sorted.length - 1;
      while (j < k) {
        const sum = sorted[i] + sorted[j] + sorted[k];
        if (sum === target) {
          return sorted[i] * sorted[j] * sorted[k];
        }
        if (sum > target) {
          k--;
        } else {
          j++;
        }
      }
    }
    return null;
  },
};
