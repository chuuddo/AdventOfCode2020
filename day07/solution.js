const parseContains = (items) => {
  return items.split(", ").reduce((res, item) => {
    const [, count, color] = item.match(/^(\d+)\s(\w+\s\w+)/);
    res[color] = Number(count);
    return res;
  }, {});
};

const parseGraph = (data) => {
  return data.reduce((res, line) => {
    const [color, contains] = line.split(" bags contain ");
    res[color] = contains === "no other bags." ? {} : parseContains(contains);
    return res;
  }, {});
};

const myColor = "shiny gold";

module.exports = {
  part1: (data) => {
    const graph = parseGraph(data);
    return Object.keys(graph).reduce((count, color) => {
      if (color === myColor) {
        return count;
      }
      const stack = Object.keys(graph[color]);
      while (stack.length > 0) {
        const current = stack.pop();
        if (current === myColor) {
          return count + 1;
        }
        stack.push(...Object.keys(graph[current]));
      }
      return count;
    }, 0);
  },
  part2: (data) => {
    const graph = parseGraph(data);
    let result = 0;
    const stack = Object.entries(graph[myColor]);
    while (stack.length > 0) {
      const [color, count] = stack.pop();
      result += count;
      stack.push(...Object.entries(graph[color]).map(([k, v]) => [k, count * v]));
    }
    return result;
  },
};
