const fs = require("fs");
const path = require("path");

module.exports = fs
  .readFileSync(path.resolve(__dirname, "data.txt"), "utf8")
  .trim()
  .split("\n")
  .map((x) => {
    const match = x.match(/(\d+)-(\d+)\s([a-z]):\s([a-z]+)/);
    return { start: Number(match[1]), end: Number(match[2]), letter: match[3], password: match[4] };
  });
