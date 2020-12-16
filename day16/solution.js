const isValid = (rule, value) => {
  return (value >= rule[1][0] && value <= rule[1][1]) || (value >= rule[1][2] && value <= rule[1][3]);
};

const parse = (data) => {
  const rules = data[0].split("\n").map((x) => {
    const [name, rest] = x.split(":");
    return [name, rest.match(/(\d+)/g).map(Number)];
  });
  const ticket = data[1].split("\n")[1].split(",").map(Number);
  const nearbyTickets = data[2]
    .split("\n")
    .slice(1)
    .map((x) => x.split(",").map(Number));
  return { rules, ticket, nearbyTickets };
};

module.exports = {
  part1: (data) => {
    const { rules, nearbyTickets } = parse(data);
    let result = 0;
    nearbyTickets.forEach((ticket) => {
      ticket.forEach((value) => {
        if (!rules.some((rule) => isValid(rule, value))) {
          result += value;
        }
      });
    });
    return result;
  },
  part2: (data) => {
    const { rules, ticket, nearbyTickets } = parse(data);
    const valid = nearbyTickets.filter((x) => x.every((value) => rules.some((rule) => isValid(rule, value))));
    const columns = new Set(Array(ticket.length).keys());
    const matches = [];
    while (rules.length) {
      for (const column of columns) {
        const candidates = rules.filter((rule) => valid.every((x) => isValid(rule, x[column])));
        if (candidates.length === 1) {
          matches.push([candidates[0], column]);
          columns.delete(column);
          rules.splice(rules.indexOf(candidates[0]), 1);
        }
      }
    }
    return matches.reduce((acc, [[name], i]) => (name.startsWith("departure") ? acc * ticket[i] : acc), 1);
  },
};
