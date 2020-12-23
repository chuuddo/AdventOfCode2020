const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim();
const example = `389125467`;

describe("Day 23", () => {
  test("part 1 example", () => expect(part1(example)).toBe(67384529));
  test("part 2 example", () => expect(part2(example)).toBe(149245887792));
  test("part 1 data", () => expect(part1(data)).toBe(69852437));
  test("part 2 data", () => expect(part2(data)).toBe(91408386135));
});
