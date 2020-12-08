const parseCode = (data) => {
  return data.map((line) => {
    const [operation, argument] = line.split(" ");
    return [operation, Number(argument)];
  });
};

const exec = (code) => {
  let acc = 0;
  let i = 0;
  const visited = new Set();
  while (!visited.has(i)) {
    visited.add(i);
    const [operation, argument] = code[i];
    switch (operation) {
      case "nop":
        i += 1;
        break;
      case "acc":
        acc += argument;
        i += 1;
        break;
      case "jmp":
        i += argument;
        break;
      default:
        break;
    }
    if (i > code.length - 1) {
      return ["end", acc];
    }
  }
  return ["loop", acc];
};

module.exports = {
  part1: (data) => exec(parseCode(data))[1],
  part2: (data) => {
    const code = parseCode(data);
    for (let i = 0; i < code.length; i++) {
      const [operation, argument] = code[i];
      if (operation === "nop" || operation === "jmp") {
        const patched = [...code];
        patched[i] = [operation === "nop" ? "jmp" : "nop", argument];
        const [status, result] = exec(patched);
        if (status === "end") {
          return result;
        }
      }
    }
    return null;
  },
};
