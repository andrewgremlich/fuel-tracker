import type { NextApiRequest, NextApiResponse } from "next";

type Food = {
  fdcId: number;
  description: string;
  brandOwner: string;
  brandName: string;
  ingredients: string;
};

type SearchData = {
  query: string;
  pageNumber: number;
  pageSize: number;
  numberOfResultsPerPage: number;
  foods: Food[];
};

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SearchData>
) => {
  const fetchUSDAdata = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.USDA_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "Cheddar Cheese",
        pageSize: 10,
        pageNumber: 1,
      }),
    }
  );
  const data = await fetchUSDAdata.json();

  console.log(data);

  res.status(200).json({ name: "John Doe" });
};
