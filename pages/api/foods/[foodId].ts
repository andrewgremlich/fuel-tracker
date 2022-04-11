import type { NextApiRequest, NextApiResponse } from "next";

import type { ReturnData, QueryParams } from "models/foods";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ReturnData>
) => {
  const queryParams = req.query as unknown as Partial<QueryParams>;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${queryParams.foodId}?api_key=${process.env.USDA_API_KEY}`
  );
  const data = await fetchUSDAdata.json();

  res.status(200).json({
    id: data.fdcId,
    description: data.description,
    nutrients: data.foodNutrients.map((n: any) => ({
      name: n.nutrient.name,
      unitName: n.nutrient.unitName,
      value: n.amount,
      description: n.nutrient.description,
    })),
  });
};
