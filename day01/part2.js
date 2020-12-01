const data = require("./data");

const threeSum = (nums, target) => {
  const sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;
    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k];
      if (sum === target) {
        return [sorted[i], sorted[j], sorted[k]];
      }
      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return null;
};

console.log(threeSum(data, 2020).reduce((prev, next) => prev * next));
