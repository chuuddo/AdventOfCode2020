const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `.#.
..#
###`.split("\n");

describe("Day 17", () => {
  test("part 1 example", () => expect(part1(example)).toBe(112));
  test("part 2 example", () => expect(part2(example)).toBe(848));
  test("part 1 data", () => expect(part1(data)).toBe(263));
  test("part 2 data", () => expect(part2(data)).toBe(1680));
});
