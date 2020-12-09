const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`.split("\n");

describe("Day 09", () => {
  test("part 1 example", () => expect(part1(example, 5)).toBe(127));
  test("part 2 example", () => expect(part2(example, 5)).toBe(62));
  test("part 1 data", () => expect(part1(data, 25)).toBe(756008079));
  test("part 2 data", () => expect(part2(data, 25)).toBe(93727241));
});
