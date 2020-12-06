const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n\n");
const example = `abc

a
b
c

ab
ac

a
a
a
a

b`.split("\n\n");

describe("Day 06", () => {
  test("part 1 example", () => expect(part1(example)).toBe(11));
  test("part 2 example", () => expect(part2(example)).toBe(6));
  test("part 1 data", () => expect(part1(data)).toBe(6590));
  test("part 2 data", () => expect(part2(data)).toBe(3288));
});
