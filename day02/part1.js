const data = require("./data");

function isValid({ start, end, letter, password }) {
  let n = 0;
  for (let i = 0; i < password.length; i++) {
    if (letter === password.charAt(i)) {
      n++;
    }
  }
  return n >= start && n <= end;
}

console.log(data.filter(isValid).length);
