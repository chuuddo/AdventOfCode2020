const twoSum = (data, target) => {
  const values = new Set();
  for (let i = 0; i < data.length; i++) {
    const complement = target - data[i];
    if (values.has(complement)) {
      return complement * data[i];
    }
    values.add(data[i]);
  }
  return null;
};

const getTarget = (data, size) => {
  const nums = data.map(Number);
  for (let i = size; i < nums.length; i++) {
    if (!twoSum(nums.slice(i - size, i), nums[i])) {
      return nums[i];
    }
  }
  return null;
};

module.exports = {
  part1: getTarget,
  part2: (data, size) => {
    const target = getTarget(data, size);
    const nums = data.map(Number);
    let i = 0;
    let j = 1;
    let sum = nums[i] + nums[j];
    while (i < nums.length - 1 && j < nums.length && i < j) {
      if (sum === target) {
        const range = nums.slice(i, j + 1);
        return Math.max(...range) + Math.min(...range);
      }
      sum += sum > target ? -nums[i++] : nums[++j];
    }
    return null;
  },
};
