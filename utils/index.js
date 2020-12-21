const getCombinations = (items, length) => {
  if (length === 1) return items.map((item) => [item]);
  return items.flatMap((item) => getCombinations(items, length - 1).map((x) => [item, ...x]));
};

const last = (array) => array[array.length - 1];
const count = (array, item) => array.reduce((a, x) => (x === item ? a + 1 : a), 0);
const count2d = (array2d, item) => array2d.reduce((a, y) => a + count(y, item), 0);

const intersect = (setA, setB) => {
  const result = new Set();
  setB.forEach((item) => {
    if (setA.has(item)) {
      result.add(item);
    }
  });
  return result;
};

module.exports = { getCombinations, last, count, count2d, intersect };
