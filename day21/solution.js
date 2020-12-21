const { intersect } = require("../utils");

const solve = (data) => {
  const ingredientCount = new Map();
  const allergenFoods = new Map();
  data.forEach((line) => {
    const [first, second] = line.split(" (contains ");
    const ingredients = first.split(" ");
    const allergens = second.slice(0, -1).split(", ");
    ingredients.forEach((x) => ingredientCount.set(x, (ingredientCount.get(x) || 0) + 1));
    allergens.forEach((x) => allergenFoods.set(x, (allergenFoods.get(x) || []).concat(new Set(ingredients))));
  });

  const dangerousIngredients = new Map();
  const queue = [...allergenFoods].map(([allergen, v]) => [allergen, v.reduce(intersect)]);
  while (queue.length > 0) {
    const [allergen, ingredients] = queue.pop();
    if (ingredients.size === 1) {
      const ingredient = [...ingredients][0];
      dangerousIngredients.set(ingredient, allergen);
      queue.forEach(([, value]) => value.delete(ingredient));
    } else {
      queue.unshift([allergen, ingredients]);
    }
  }

  return [dangerousIngredients, ingredientCount];
};

module.exports = {
  part1: (data) => {
    const [dangerousIngredients, ingredientCount] = solve(data);
    return [...ingredientCount].reduce((acc, [k, v]) => (dangerousIngredients.has(k) ? acc : acc + v), 0);
  },
  part2: (data) => {
    const [dangerousIngredients] = solve(data);
    return [...dangerousIngredients]
      .sort((a, b) => (a[1] > b[1] ? 1 : -1))
      .map((x) => x[0])
      .join(",");
  },
};
