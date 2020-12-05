const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");

describe("Day 05", () => {
  test("part 1 example 1", () => expect(part1(["BFFFBBFRRR"])).toBe(567));
  test("part 1 example 2", () => expect(part1(["FFFBBBFRRR"])).toBe(119));
  test("part 1 example 3", () => expect(part1(["BBFFBBFRLL"])).toBe(820));
  test("part 1 data", () => expect(part1(data)).toBe(944));
  test("part 2 data", () => expect(part2(data)).toBe(554));
});
