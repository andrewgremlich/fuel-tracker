import { Handler } from "@netlify/functions";
import { config } from "dotenv";
import fetch from "node-fetch";

import {
  SearchQueryParams,
  DataResponse,
  USDAFoodsData,
  NutrientDataExpanded,
} from "models/foods";

config();

export const handler: Handler = async (event, context) => {
  const { query, pageNumber, pageSize } =
    event.queryStringParameters as unknown as SearchQueryParams;
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
  const foods = searchResponse.foods.map((food) => ({
    fdcId: food.fdcId,
    description: food.lowercaseDescription,
    brandOwner: food.brandOwner,
    brandName: food.brandName,
    ingredients: food.ingredients,
    productName: food.subbrandName,
    foodNutrients: food.foodNutrients?.map(
      ({
        nutrientName,
        unitName,
        value,
        derivationDescription,
      }: NutrientDataExpanded) => ({
        nutrientName,
        unitName,
        value,
        derivationDescription,
      })
    ),
  }));

  console.log();

  return {
    statusCode: 200,
    body: JSON.stringify(foods, null, 2),
  };
};
