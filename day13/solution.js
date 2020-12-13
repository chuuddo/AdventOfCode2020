function modInverse(a, mod) {
  const b = a % mod;
  for (let x = 1; x < mod; x++) {
    if ((b * x) % mod === 1) {
      return x;
    }
  }
  return 1;
}

const mod = (n, m) => ((n % m) + m) % m;

const chineseRemainder = (p, a) => {
  const x = [...a];
  let result = 0;
  let m = 1;
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < i; j++) {
      x[i] = mod(modInverse(p[j], p[i]) * (x[i] - x[j]), p[i]);
    }
    result += x[i] * m;
    m *= p[i];
  }

  return result;
};

module.exports = {
  part1: (data) => {
    const time = Number(data[0]);
    const result = data[1]
      .split(",")
      .filter((x) => x !== "x")
      .map(Number)
      .map((x) => [x - (time % x), x])
      .sort((a, b) => a[0] - b[0]);
    return result[0][0] * result[0][1];
  },
  part2: (data) => {
    const [p, a] = data[1].split(",").reduce(
      (acc, curr, i) => {
        if (curr !== "x") {
          const bus = Number(curr);
          acc[0].push(bus);
          acc[1].push(mod(bus - i, bus));
        }
        return acc;
      },
      [[], []]
    );
    return chineseRemainder(p, a);
  },
};
