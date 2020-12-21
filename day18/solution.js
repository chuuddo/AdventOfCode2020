const parseTokens = (s) => s.replace(/\(/g, "( ").replace(/\)/g, " )").split(" ");

const calculate = (tokens) => {
  const stack = [];
  tokens.forEach((token) => {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop());
    } else {
      stack.push(Number(token));
    }
  });
  return stack[0];
};

const getReversePolishNotation = (tokens, weights) => {
  const stack = [];
  const output = [];
  tokens.forEach((token) => {
    if (token === "*" || token === "+") {
      if (stack.length) {
        let op = stack.pop();
        while (op && op !== "(" && weights[op] >= weights[token]) {
          output.push(op);
          op = stack.pop();
        }
        if (op) {
          stack.push(op);
        }
      }
      stack.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      let op = stack.pop();
      while (op !== "(") {
        output.push(op);
        op = stack.pop();
      }
    } else {
      output.push(token);
    }
  });
  return output.concat(stack.reverse());
};

const solve = (data, weights) => {
  return data.reduce((acc, cur) => acc + calculate(getReversePolishNotation(parseTokens(cur), weights)), 0);
};

module.exports = {
  part1: (data) => solve(data, { "+": 1, "*": 1 }),
  part2: (data) => solve(data, { "+": 2, "*": 1 }),
};
