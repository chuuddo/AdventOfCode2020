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

const part1 = (data, size) => {
  const nums = data.map(Number);
  for (let i = size; i < nums.length; i++) {
    if (!twoSum(nums.slice(i - size, i), nums[i])) {
      return nums[i];
    }
  }
  return null;
};

const part2 = (data, size) => {
  const target = part1(data, size);
  const nums = data.map(Number);
  for (let i = 0; i < nums.length - 1; i++) {
    let sum = nums[i];
    let min = nums[i];
    let max = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > target) break;
      min = Math.min(nums[j], min);
      max = Math.max(nums[j], max);
      if (sum === target) {
        return min + max;
      }
    }
  }
  return null;
};

module.exports = {
  part1,
  part2,
};
