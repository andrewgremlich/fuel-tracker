import { Handler } from "@netlify/functions";
import { config } from "dotenv";
import fetch from "node-fetch";

import { SearchQueryParams, FoodMeta, NutrientDataSimple } from "models/foods";

config();

export const handler: Handler = async (event) => {
  const { foodId } =
    event.queryStringParameters as unknown as Partial<SearchQueryParams>;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${process.env.USDA_API_KEY}`
  );
  const data = (await fetchUSDAdata.json()) as FoodMeta<NutrientDataSimple>;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        fdcId: data.fdcId ?? "",
        description: data.description ?? "",
        nutrients: data.foodNutrients.map((nutrient) => ({
          description: nutrient.nutrient.name,
          value: nutrient.amount,
          unit: nutrient.nutrient.unitName,
          name: nutrient.nutrient.name,
        })),
      },
      null,
      2
    ),
  };
};
