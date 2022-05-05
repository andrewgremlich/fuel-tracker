var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/food.ts
__export(exports, {
  handler: () => handler
});
var handler = async (event, context) => {
  var _a, _b;
  const queryParams = req.query;
  const fetchUSDAdata = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${queryParams.foodId}?api_key=${process.env.USDA_API_KEY}`);
  const data = await fetchUSDAdata.json();
  console.log(data);
  res.status(200).json({
    fdcId: (_a = data.fdcId) != null ? _a : "",
    description: (_b = data.description) != null ? _b : "",
    nutrients: data.foodNutrients.map((nutrient) => ({
      description: nutrient.nutrient.name,
      value: nutrient.amount,
      unit: nutrient.nutrient.unitName,
      name: nutrient.nutrient.name
    }))
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=food.js.map
