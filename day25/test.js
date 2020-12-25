const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim();
const example = `5764801
17807724`;

describe("Day 25", () => {
  test("part 1 example", () => expect(part1(example)).toBe(14897079));
  test("part 2 example", () => expect(part2()).toBe(0));
  test("part 1 data", () => expect(part1(data)).toBe(6198540));
  test("part 2 data", () => expect(part2()).toBe(0));
});
