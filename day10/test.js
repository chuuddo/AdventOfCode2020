const { readFileSync } = require("fs");
const { resolve } = require("path");
const { part1, part2 } = require("./solution");

const data = readFileSync(resolve(__dirname, "data.txt"), "utf8").trim().split("\n");
const example = `16
10
15
5
1
11
7
19
6
12
4`.split("\n");
const example2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split("\n");

describe("Day 10", () => {
  test("part 1 example", () => expect(part1(example)).toBe(35));
  test("part 1 example 2", () => expect(part1(example2)).toBe(220));
  test("part 2 example", () => expect(part2(example)).toBe(8));
  test("part 2 example 2", () => expect(part2(example2)).toBe(19208));
  test("part 1 data", () => expect(part1(data)).toBe(1820));
  test("part 2 data", () => expect(part2(data)).toBe(3454189699072));
});
