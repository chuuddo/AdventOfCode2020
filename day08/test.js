const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`.split("\n");

describe("Day 08", () => {
  test("part 1 example", () => expect(part1(example)).toBe(5));
  test("part 2 example", () => expect(part2(example)).toBe(8));
  test("part 1 data", () => expect(part1(data)).toBe(1087));
  test("part 2 data", () => expect(part2(data)).toBe(780));
});
