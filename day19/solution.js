const isMatch = (rules, message, index, queue) => {
  if (message.length === index && queue.length === 0) return true;
  if (queue.length === 0) return false;
  const rule = rules.get(queue.shift());
  return typeof rule === "string"
    ? message[index] === rule && isMatch(rules, message, index + 1, [...queue])
    : rule.some((x) => isMatch(rules, message, index, [...x, ...queue]));
};

const solve = (data) => {
  const [first, messages] = data.split("\n\n").map((x) => x.split("\n"));
  const rules = first.reduce((acc, rule) => {
    const [k, v] = rule.split(": ");
    return acc.set(k, v[1] === "a" || v[1] === "b" ? v[1] : v.split(" | ").map((x) => x.split(" ")));
  }, new Map());

  return messages.reduce((count, m) => (isMatch(rules, m, 0, ["0"]) ? count + 1 : count), 0);
};

module.exports = {
  part1: (data) => solve(data),
  part2: (data) => solve(data.replace("8: 42", "8: 42 | 42 8").replace("11: 42 31", "11: 42 31 | 42 11 31")),
};
