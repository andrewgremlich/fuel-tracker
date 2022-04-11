import type { NextApiRequest, NextApiResponse } from "next";

import type {
  QueryParams,
  USDAFoodsData,
  NutrientData,
  DataResponse,
  FoodItem,
} from "models/foods";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<DataResponse<FoodItem>>
) => {
  const {
    foodQuery: query,
    pageNumber,
    pageSize,
  } = req.query as unknown as Partial<QueryParams>;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.USDA_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        pageSize,
        pageNumber,
      }),
    }
  );
  const searchResponse =
    (await fetchUSDAdata.json()) as DataResponse<USDAFoodsData>;

  const foods = searchResponse.foods.map((food: USDAFoodsData) => ({
    fdcId: food.fdcId,
    description: food.lowercaseDescription,
    brandOwner: food.brandOwner,
    brandName: food.brandName,
    ingredients: food.ingredients,
    productName: food.subbrandName,
    foodNutrients: food.foodNutrients?.map(
      ({ nutrientName, unitName, value }: NutrientData) => ({
        nutrientName,
        unitName,
        value,
      })
    ),
  }));

  res.status(200).json({ foods });
};
