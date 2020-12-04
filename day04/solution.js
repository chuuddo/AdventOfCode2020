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

function isValidField(name, value) {
  switch (name) {
    case "byr":
      return inRange(value, 1920, 2002);
    case "iyr":
      return inRange(value, 2010, 2020);
    case "eyr":
      return inRange(value, 2020, 2030);
    case "hgt": {
      const match = value.match(/^(\d+)(cm|in)$/);
      if (match === null) {
        return false;
      }
      return (match[2] === "cm" && inRange(match[1], 150, 193)) || (match[2] === "in" && inRange(match[1], 59, 76));
    }
    case "hcl":
      return /#[0-9a-f]{6}/g.test(value);
    case "ecl":
      return colors.includes(value);
    case "pid":
      return /^\d{9}$/.test(value);
    default:
      return true;
  }
}

function isValid2(passport) {
  for (let i = 0; i < required.length; i++) {
    const field = required[i];
    const value = passport[field];
    if (value === undefined || !isValidField(field, value)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  part1: (data) => data.reduce((acc, curr) => (isValid1(parsePassport(curr)) ? acc + 1 : acc), 0),
  part2: (data) => data.reduce((acc, curr) => (isValid2(parsePassport(curr)) ? acc + 1 : acc), 0),
};
