const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

const inRange = (value, start, end) => {
  const num = Number(value);
  return num >= start && num <= end;
};

const parsePassport = (str) => {
  const tokens = str.split(/[\s\n]+/);
  return tokens.reduce((acc, curr) => {
    const [key, value] = curr.split(":");
    acc[key] = value;
    return acc;
  }, {});
};

const validators = {
  byr: (x) => inRange(x, 1920, 2002),
  iyr: (x) => inRange(x, 2010, 2020),
  eyr: (x) => inRange(x, 2020, 2030),
  hgt: (x) => {
    const match = x.match(/^(\d+)(cm|in)$/);
    if (match === null) {
      return false;
    }
    return (match[2] === "cm" && inRange(match[1], 150, 193)) || (match[2] === "in" && inRange(match[1], 59, 76));
  },
  hcl: (x) => /#[0-9a-f]{6}/g.test(x),
  ecl: (x) => colors.includes(x),
  pid: (x) => /^\d{9}$/.test(x),
};

const isValid1 = (passport) => required.every((x) => passport[x]);
const isValid2 = (passport) => required.every((x) => passport[x] && validators[x](passport[x]));

module.exports = {
  part1: (data) => data.reduce((acc, curr) => (isValid1(parsePassport(curr)) ? acc + 1 : acc), 0),
  part2: (data) => data.reduce((acc, curr) => (isValid2(parsePassport(curr)) ? acc + 1 : acc), 0),
};
