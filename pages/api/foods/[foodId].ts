import type { NextApiRequest, NextApiResponse } from "next";

type Nutrient = {
  name: string;
  unitName: string;
  value: number;
  description: string;
};

type ReturnData = { id: string; description: string; nutrients: Nutrient[] };

type QueryParams = {
  foodId: string;
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ReturnData>
) => {
  const queryParams = req.query as unknown as QueryParams;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${queryParams.foodId}?api_key=${process.env.USDA_API_KEY}`
  );
  const data = await fetchUSDAdata.json();

  res.status(200).json({
    id: data.fdcId,
    description: data.description,
    nutrients: data.foodNutrients.map((n) => ({
      name: n.nutrient.name,
      unitName: n.nutrient.unitName,
      value: n.amount,
      description: n.nutrient.description,
    })),
  });
};
