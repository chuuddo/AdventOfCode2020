const data = require("./data");

function isValid({ start, end, letter, password }) {
  return [start, end].filter((x) => password.charAt(x - 1) === letter).length === 1;
}

console.log(data.filter(isValid).length);
