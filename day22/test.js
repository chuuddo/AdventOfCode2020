const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim();
const example = `Player 1:
9
2
6
3
1

Player 2:
5
8
4
7
10`;

describe("Day 22", () => {
  test("part 1 example", () => expect(part1(example)).toBe(306));
  test("part 2 example", () => expect(part2(example)).toBe(291));
  test("part 1 data", () => expect(part1(data)).toBe(32199));
  test("part 2 data", () => expect(part2(data)).toBe(33780));
});
