const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `939
7,13,x,x,59,x,31,19`.split("\n");

describe("Day 12", () => {
  test("part 1 example", () => expect(part1(example)).toBe(295));
  test("part 2 example", () => expect(part2(example)).toBe(1068781));
  test("part 2 example 2", () => expect(part2(["", "17,x,13,19"])).toBe(3417));
  test("part 2 example 3", () => expect(part2(["", "67,7,59,61"])).toBe(754018));
  test("part 2 example 4", () => expect(part2(["", "67,x,7,59,61"])).toBe(779210));
  test("part 2 example 5", () => expect(part2(["", "67,7,x,59,61"])).toBe(1261476));
  test("part 2 example 5", () => expect(part2(["", "1789,37,47,1889"])).toBe(1202161486));
  test("part 1 data", () => expect(part1(data)).toBe(2995));
  test("part 2 data", () => expect(part2(data)).toBe(1012171816131114));
});
