const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

describe("Day 02", () => {
  test("part 1 example", () => expect(part1(example)).toBe(2));
  test("part 2 example", () => expect(part2(example)).toBe(1));
  test("part 1 data", () => expect(part1(data)).toBe(645));
  test("part 2 data", () => expect(part2(data)).toBe(737));
});
