const getSeatId = (seat) => {
  let rowStart = 0;
  let rowEnd = 127;
  let colStart = 0;
  let colEnd = 7;
  for (let k = 0; k < seat.length; k++) {
    switch (seat[k]) {
      case "F":
        rowEnd = Math.floor((rowStart + rowEnd) / 2);
        break;
      case "B":
        rowStart = Math.ceil((rowStart + rowEnd) / 2);
        break;
      case "L":
        colEnd = Math.floor((colStart + colEnd) / 2);
        break;
      case "R":
        colStart = Math.ceil((colStart + colEnd) / 2);
        break;
      default:
        break;
    }
  }
  return rowStart * 8 + colStart;
};

module.exports = {
  part1: (data) => Math.max(...data.map(getSeatId)),
  part2: (data) => {
    const numbers = data.map(getSeatId).sort((a, b) => a - b);
    for (let i = 0; i < numbers.length - 1; i++) {
      const id = numbers[i] + 1;
      if (numbers[i + 1] === id + 1) {
        return id;
      }
    }
    return -1;
  },
};
