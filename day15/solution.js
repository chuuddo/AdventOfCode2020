function solve(data, n) {
  const nums = data.split(",").map(Number);
  let last = nums.pop();
  const used = new Map(nums.map((x, i) => [x, i]));
  for (let i = nums.length + 1; i < n; i++) {
    const lastIndex = used.get(last);
    used.set(last, i - 1);
    last = lastIndex !== undefined ? i - lastIndex - 1 : 0;
  }
  return last;
}

module.exports = {
  part1: (data) => solve(data, 2020),
  part2: (data) => solve(data, 30000000),
};
