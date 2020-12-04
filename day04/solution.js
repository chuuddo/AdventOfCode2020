const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

function inRange(value, start, end) {
  const num = Number(value);
  return num >= start && num <= end;
}

function parsePassport(str) {
  const tokens = str.split(/[\s\n]+/);
  return tokens.reduce((acc, curr) => {
    const [key, value] = curr.split(":");
    acc[key] = value;
    return acc;
  }, {});
}

function isValid1(passport) {
  for (let i = 0; i < required.length; i++) {
    const field = required[i];
    if (passport[field] === undefined) {
      return false;
    }
  }
  return true;
}

function isValid2(passport) {
  for (let i = 0; i < required.length; i++) {
    const field = required[i];
    const value = passport[field];
    if (value === undefined) {
      return false;
    }
    switch (field) {
      case "byr":
        if (!inRange(value, 1920, 2002)) {
          return false;
        }
        break;
      case "iyr":
        if (!inRange(value, 2010, 2020)) {
          return false;
        }
        break;
      case "eyr":
        if (!inRange(value, 2020, 2030)) {
          return false;
        }
        break;
      case "hgt": {
        const match = value.match(/^(\d+)(cm|in)$/);
        if (
          match == null ||
          (match[2] === "cm" && !inRange(match[1], 150, 193)) ||
          (match[2] === "in" && !inRange(match[1], 59, 76))
        ) {
          return false;
        }
        break;
      }
      case "hcl":
        if (!/#[0-9a-f]{6}/g.test(value)) {
          return false;
        }
        break;
      case "ecl":
        if (!colors.includes(value)) {
          return false;
        }
        break;
      case "pid":
        if (!/^\d{9}$/.test(value)) {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return true;
}

module.exports = {
  part1: (data) => data.reduce((acc, curr) => (isValid1(parsePassport(curr)) ? acc + 1 : acc), 0),
  part2: (data) => data.reduce((acc, curr) => (isValid2(parsePassport(curr)) ? acc + 1 : acc), 0),
};
