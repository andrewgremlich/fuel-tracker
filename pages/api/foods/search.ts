import type { NextApiRequest, NextApiResponse } from "next";

import type {
  SearchData,
  QueryParams,
  RawFoodSearchData,
} from "models/foods";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SearchData>
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
  const searchResponse = await fetchUSDAdata.json();
  const response = searchResponse.foods.map(
    ({
      fdcId: id,
      lowercaseDescription: description,
      brandOwner,
      brandName,
      ingredients,
      foodNutrients,
      subbrandName,
    }: RawFoodSearchData) => ({
      id,
      description,
      brandOwner,
      brandName,
      productName: subbrandName,
      ingredients,
      nutrients: foodNutrients.map(({ nutrientName, unitName, value }) => ({
        nutrientName,
        unitName,
        value,
      })),
    })
  );

  res.status(200).json({ foods: response });
};
