const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");

describe("Day 18", () => {
  test("part 1 example", () => expect(part1(["2 * 3 + (4 * 5)"])).toBe(26));
  test("part 1 example 2", () => expect(part1(["1 + (2 * 3) + (4 * (5 + 6))"])).toBe(51));
  test("part 1 example 3", () => expect(part1(["5 + (8 * 3 + 9 + 3 * 4 * 3)"])).toBe(437));
  test("part 1 example 4", () => expect(part1(["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"])).toBe(12240));
  test("part 1 example 5", () => expect(part1(["((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"])).toBe(13632));
  test("part 2 example", () => expect(part2(["1 + (2 * 3) + (4 * (5 + 6))"])).toBe(51));
  test("part 2 example 2", () => expect(part2(["2 * 3 + (4 * 5)"])).toBe(46));
  test("part 2 example 3", () => expect(part2(["5 + (8 * 3 + 9 + 3 * 4 * 3)"])).toBe(1445));
  test("part 2 example 4", () => expect(part2(["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"])).toBe(669060));
  test("part 2 example 5", () => expect(part2(["((2 + 4 * 9) * (6 + 9 * 8 + 6) + 6) + 2 + 4 * 2"])).toBe(23340));
  test("part 1 data", () => expect(part1(data)).toBe(21022630974613));
  test("part 2 data", () => expect(part2(data)).toBe(169899524778212));
});
