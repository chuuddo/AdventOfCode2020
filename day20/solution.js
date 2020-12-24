const { getCombinations, last, count2d } = require("../utils");

const buildImage = (tiles) => {
  const result = [];
  for (let y = 0; y < tiles.length; y++) {
    for (let x = 0; x < tiles[0].length; x++) {
      const tile = tiles[y][x];
      for (let i = 0; i < tile.length; i++) {
        const row = y * tile.length + i;
        result[row] = (result[row] || []).concat(tile[i]);
      }
    }
  }
  return result;
};

const findMonster = (board, pattern, startY, startX) => {
  for (let y = 0; y < pattern.length; y++) {
    for (let x = 0; x < pattern[y].length; x++) {
      if (pattern[y][x] === "#" && board[startY + y][startX + x] !== "#") {
        return false;
      }
    }
  }
  return true;
};

const countMonsters = (image, pattern) => {
  let count = 0;
  for (let startY = 0; startY < image.length - pattern.length; startY++) {
    for (let startX = 0; startX < image[0].length - pattern[0].length; startX++) {
      if (findMonster(image, pattern, startY, startX)) {
        count++;
      }
    }
  }
  return count;
};

const transpose = (tile) => tile[0].map((_, i) => tile.map((x) => x[i]));
const rotate = (tile) => transpose(tile).map((x) => [...x].reverse());
const getRotations = (tile) => [0, 1, 2].reduce((acc, i) => [...acc, rotate(acc[i])], [tile]);
const getTransforms = (tile) => [transpose(tile), tile].flatMap(getRotations);
const removeBorder = (tile) => tile.slice(1, -1).map((x) => x.slice(1, -1));
const getBorders = (tile) => [tile[0], last(tile), tile.map((x) => x[0]), tile.map((x) => last(x))];
const canConnectRight = (source, target) => target.every((x, i) => x[0] === last(source[i]));
const canConnectBottom = (source, target) => target[0].every((x, i) => x === last(source)[i]);

const arrange = (grid, stack, tiles, used = new Set()) => {
  if (stack.length === 0) return grid;
  const [x, y] = stack.pop();
  for (const [key, value] of tiles) {
    if (used.has(key)) continue;
    for (const tile of value) {
      if (x > 0 && !canConnectRight(grid[y][x - 1][1], tile)) continue;
      if (y > 0 && !canConnectBottom(grid[y - 1][x][1], tile)) continue;
      grid[y][x] = [key, tile];
      return arrange(grid, stack, tiles, used.add(key));
    }
  }
  return undefined;
};

const buildGrid = (tiles, corners) => {
  const tilesWithTransforms = new Map([...tiles].map(([k, v]) => [k, getTransforms(v)]));
  const indexes = [...Array(Math.sqrt(tilesWithTransforms.size)).keys()];
  const stack = getCombinations(indexes, 2).slice(1).reverse();
  for (const key of corners) {
    for (const value of tilesWithTransforms.get(key)) {
      const init = indexes.map(() => []);
      init[0][0] = [key, value];
      const grid = arrange(init, [...stack], tilesWithTransforms, new Set([key]));
      if (grid) return grid;
    }
  }
  return undefined;
};

const parseTiles = (data) => {
  return data.reduce((acc, cur) => {
    const [title, ...lines] = cur.split("\n");
    const tile = lines.map((x) => x.split(""));
    return acc.set(Number(title.slice(5, 9)), tile);
  }, new Map());
};

const getCorners = (tiles) => {
  const borderTiles = [...tiles].reduce((acc, [key, value]) => {
    const borders = getBorders(value).flatMap((x) => [x, [...x].reverse()].map((i) => i.join("")));
    borders.forEach((x) => acc.set(x, (acc.get(x) || []).concat(key)));
    return acc;
  }, new Map());

  const tilesWithUniqueBorders = [...borderTiles].reduce((acc, [key, value]) => {
    return value.length !== 1 ? acc : acc.set(value[0], (acc.get(value[0]) || []).concat(key));
  }, new Map());

  return [...tilesWithUniqueBorders].reduce((acc, [key, value]) => (value.length === 4 ? acc.concat(key) : acc), []);
};

module.exports = {
  part1: (data) => getCorners(parseTiles(data)).reduce((acc, id) => acc * id, 1),
  part2: (data) => {
    const tiles = parseTiles(data);
    const corners = getCorners(tiles);
    const grid = buildGrid(tiles, corners);
    const monster = ["                  # ", "#    ##    ##    ###", " #  #  #  #  #  #   "].map((x) => x.split(""));
    const image = buildImage(grid.map((y) => y.map((x) => removeBorder(x[1]))));
    const monsters = Math.max(...getTransforms(monster).map((x) => countMonsters(image, x)));
    return count2d(image, "#") - count2d(monster, "#") * monsters;
  },
};
