const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `F10
N3
F7
R90
F11`.split("\n");

describe("Day 11", () => {
  test("part 1 example", () => expect(part1(example)).toBe(25));
  test("part 2 example", () => expect(part2(example)).toBe(286));
  test("part 1 data", () => expect(part1(data)).toBe(1186));
  test("part 2 data", () => expect(part2(data)).toBe(47806));
});
