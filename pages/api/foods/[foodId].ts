import type { NextApiRequest, NextApiResponse } from "next";

import type {
  QueryParams,
  FoodMeta,
  NutrientDataSimple,
  FoodReturnData,
} from "models/foods";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<FoodReturnData>
) => {
  const queryParams = req.query as unknown as Partial<QueryParams>;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${queryParams.foodId}?api_key=${process.env.USDA_API_KEY}`
  );
  const data = (await fetchUSDAdata.json()) as FoodMeta<NutrientDataSimple>;

  console.log(data);

  res.status(200).json({
    fdcId: data.fdcId ?? "",
    description: data.description ?? "",
    nutrients: data.foodNutrients.map((nutrient) => ({
      description: nutrient.nutrient.name,
      value: nutrient.amount,
      unit: nutrient.nutrient.unitName,
      name: nutrient.nutrient.name,
    })),
  });
};
