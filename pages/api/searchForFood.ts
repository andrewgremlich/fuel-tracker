import type { NextApiRequest, NextApiResponse } from "next";

type NutrientData = {
  nutrientName: string;
  unitName: string;
  value: number;
};

type SearchData = {
  foods: {
    id: number;
    description: string;
    brandOwner: string;
    brandName: string;
    ingredients: string;
    nutrients: NutrientData[];
  }[];
};

type QueryParams = {
  foodQuery: string;
  pageSize: number;
  pageNumber: number;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SearchData>
) => {
  const {
    foodQuery: query,
    pageNumber,
    pageSize,
  } = req.query as unknown as QueryParams;

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
  const data = await fetchUSDAdata.json();
  const response = data.foods.map(
    ({
      fdcId: id,
      lowercaseDescription: description,
      brandOwner,
      brandName,
      ingredients,
      foodNutrients,
    }: {
      fdcId: string;
      lowercaseDescription: string;
      brandOwner: string;
      brandName: string;
      ingredients: string;
      foodNutrients: NutrientData[];
    }) => (
      console.log(foodNutrients),
      {
        id,
        description,
        brandOwner,
        brandName,
        ingredients,
        nutrients: foodNutrients.map(({ nutrientName, unitName, value }) => ({
          nutrientName,
          unitName,
          value,
        })),
      }
    )
  );

  res.status(200).json({ foods: response });
};
