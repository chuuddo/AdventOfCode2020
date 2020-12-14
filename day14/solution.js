module.exports = {
  part1: (data) => {
    const mem = new Map();
    let mask;
    data.forEach((line) => {
      if (line.startsWith("mask")) {
        [, mask] = line.split(" = ");
      } else {
        const [, address, value] = line.match(/mem\[(\d+)\] = (\d+)/);
        const bits = Number(value).toString(2).padStart(36, "0").split("");
        const result = bits.map((bit, i) => (mask[i] === "X" ? bit : mask[i]));
        mem.set(address, parseInt(result.join(""), 2));
      }
    });
    return Array.from(mem.values()).reduce((a, b) => a + b);
  },
  part2: (data) => {
    const mem = new Map();
    let mask;
    data.forEach((line) => {
      if (line.startsWith("mask")) {
        [, mask] = line.split(" = ");
      } else {
        const [, address, value] = line.match(/mem\[(\d+)\] = (\d+)/);
        const bits = Number(address).toString(2).padStart(36, "0").split("");
        let result = [[]];
        for (let i = 0; i < bits.length; i++) {
          if (mask[i] === "X") {
            result = result.map((x) => [...x, "0"]).concat(result.map((x) => [...x, "1"]));
          } else if (mask[i] === "0") {
            result = result.map((x) => [...x, bits[i]]);
          } else if (mask[i] === "1") {
            result = result.map((x) => [...x, "1"]);
          }
        }
        result.forEach((x) => mem.set(x.join(""), Number(value)));
      }
    });
    return Array.from(mem.values()).reduce((a, b) => a + b);
  },
};
