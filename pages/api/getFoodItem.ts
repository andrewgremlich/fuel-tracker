import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type QueryParams = {
  foodId: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const queryParams = req.query as unknown as QueryParams;

  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${queryParams.foodId}?api_key=${process.env.USDA_API_KEY}`
  );
  const data = await fetchUSDAdata.json();

  console.log(data);

  res.status(200).json({ name: "John Doe" });
};
