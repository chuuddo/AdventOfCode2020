const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`.split("\n");
const example2 = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`.split("\n");

describe("Day 14", () => {
  test("part 1 example", () => expect(part1(example)).toBe(165));
  test("part 2 example", () => expect(part2(example2)).toBe(208));
  test("part 1 data", () => expect(part1(data)).toBe(14954914379452));
  test("part 2 data", () => expect(part2(data)).toBe(3415488160714));
});
