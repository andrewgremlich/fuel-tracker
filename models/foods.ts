export type NutrientData = {
  nutrientName: string;
  unitName: string;
  value: number;
};

export type FoodItem = {
  id: number;
  description: string;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  nutrients: NutrientData[];
};

export type SearchData = {
  foods: FoodItem[];
};

export type QueryParams = {
  foodQuery: string;
  pageSize: number;
  pageNumber: number;
  foodId: string;
};

export type Nutrient = {
  name: string;
  unitName: string;
  value: number;
  description: string;
};

export type ReturnData = {
  id: string;
  description: string;
  nutrients: Nutrient[];
};
