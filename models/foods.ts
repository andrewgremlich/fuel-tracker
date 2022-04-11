export type NutrientData = {
  nutrientName: string;
  unitName: string;
  value: number;
};

type FoodMeta = {
  fdcId: number;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  foodNutrients: NutrientData[];
};

export type USDAFoodsData = {
  lowercaseDescription: string;
  subbrandName: string;
} & FoodMeta;

export type FoodItem = {
  description: string;
  productName: string;
} & FoodMeta;


export type DataResponse<T> = {
  foods: T[];
};

export type QueryParams = {
  foodQuery: string;
  pageSize: number;
  pageNumber: number;
  foodId: string;
};

// TODO Double check these types below...

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

export type RawFoodSearchData = {
  fdcId: string;
  lowercaseDescription: string;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  foodNutrients: NutrientData[];
  subbrandName: string;
};
