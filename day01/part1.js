const data = require("./data");

const twoSum = (nums, target) => {
  const values = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (values[complement]) {
      return [complement, nums[i]];
    }
    values[nums[i]] = 1;
  }
  return null;
};

console.log(twoSum(data, 2020).reduce((prev, next) => prev * next));
