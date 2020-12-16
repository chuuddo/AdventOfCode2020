const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n\n");
const example = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`.split("\n\n");
const example2 = `departure class: 0-1 or 4-19
departure row: 0-5 or 8-19
seat: 0-13 or 16-19

your ticket:
11,12,13

nearby tickets:
3,9,18
15,1,5
5,14,9`.split("\n\n");

describe("Day 16", () => {
  test("part 1 example", () => expect(part1(example)).toBe(71));
  test("part 2 example", () => expect(part2(example2)).toBe(132));
  test("part 1 data", () => expect(part1(data)).toBe(19087));
  test("part 2 data", () => expect(part2(data)).toBe(1382443095281));
});
