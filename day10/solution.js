const normalize = (data) => {
  const nums = data.map(Number).sort((a, b) => a - b);
  return [0, ...nums, nums[nums.length - 1] + 3];
};

module.exports = {
  part1: (data) => {
    const nums = normalize(data);
    let count1 = 0;
    let count3 = 0;
    for (let i = 1; i < nums.length; i++) {
      const diff = nums[i] - nums[i - 1];
      if (diff === 1) {
        count1++;
      } else if (diff === 3) {
        count3++;
      }
    }
    return count1 * count3;
  },
  part2: (data) => {
    const nums = normalize(data);
    const dp = [1];
    for (let i = 1; i < nums.length; i++) {
      dp[i] = 0;
      for (let j = i - 3; j < i; j++) {
        if (j >= 0 && nums[i] - nums[j] <= 3) {
          dp[i] += dp[j];
        }
      }
    }
    return dp[dp.length - 1];
  },
};
