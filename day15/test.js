const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim();

describe("Day 15", () => {
  test("part 1 example", () => expect(part1("0,3,6")).toBe(436));
  test("part 1 example 2", () => expect(part1("1,3,2")).toBe(1));
  test("part 1 example 3", () => expect(part1("2,1,3")).toBe(10));
  test("part 1 example 4", () => expect(part1("1,2,3")).toBe(27));
  test("part 1 example 5", () => expect(part1("2,3,1")).toBe(78));
  test("part 1 example 6", () => expect(part1("3,2,1")).toBe(438));
  test("part 1 example 7", () => expect(part1("3,1,2")).toBe(1836));
  test("part 2 example", () => expect(part2("0,3,6")).toBe(175594));
  test("part 2 example 2", () => expect(part2("1,3,2")).toBe(2578));
  test("part 2 example 3", () => expect(part2("2,1,3")).toBe(3544142));
  test("part 2 example 4", () => expect(part2("1,2,3")).toBe(261214));
  test("part 2 example 5", () => expect(part2("2,3,1")).toBe(6895259));
  test("part 2 example 6", () => expect(part2("3,2,1")).toBe(18));
  test("part 2 example 7", () => expect(part2("3,1,2")).toBe(362));
  test("part 1 data", () => expect(part1(data)).toBe(755));
  test("part 2 data", () => expect(part2(data)).toBe(11962));
});
