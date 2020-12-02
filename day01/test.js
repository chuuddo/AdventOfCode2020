const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = ["1721", "979", "366", "299", "675", "1456"];

describe("Day 01", () => {
  test("part 1 example", () => expect(part1(example)).toBe(514579));
  test("part 2 example", () => expect(part2(example)).toBe(241861950));
  test("part 1 data", () => expect(part1(data)).toBe(1010299));
  test("part 2 data", () => expect(part2(data)).toBe(42140160));
});
