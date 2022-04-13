export type NutrientDataExpanded = {
  nutrientName: string;
  unitName: string;
  value: number;
  derivationDescription: string;
};

export type NutrientDataSimple = {
  nutrient: {
    name: string;
    unitName: string;
  };
  foodNutrientDerivation: {
    description: string;
  };
  amount: number;
};

export type FoodMeta<T> = {
  fdcId: number;
  brandOwner: string;
  brandName: string;
  ingredients: string;
  foodNutrients: T[];
  description?: string;
};

export type USDAFoodsData = {
  lowercaseDescription: string;
  subbrandName: string;
} & FoodMeta<NutrientDataExpanded>;

export type FoodItem = {
  description: string;
  productName: string;
} & FoodMeta<NutrientDataExpanded>;

export type DataResponse<T> = {
  foods: T[];
};

export type QueryParams = {
  foodQuery: string;
  pageSize: number;
  pageNumber: number;
  foodId?: string;
};

export type FoodReturnData = {
  fdcId: number;
  description: string;
  nutrients: {
    description: string;
    value: number;
    unit: string;
    name: string;
  }[];
};
