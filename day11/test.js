const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`.split("\n");

describe("Day 11", () => {
  test("part 1 example", () => expect(part1(example)).toBe(37));
  test("part 2 example", () => expect(part2(example)).toBe(26));
  test("part 1 data", () => expect(part1(data)).toBe(2222));
  test("part 2 data", () => expect(part2(data)).toBe(2032));
});
