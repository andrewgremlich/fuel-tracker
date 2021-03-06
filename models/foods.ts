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

export type SearchQueryParams = {
  query: string;
  pageNumber: number;
  pageSize: number;
  sort?: string;
  sortDirection?: string;
  foodId?: number;
};

export type FoodReturnData = {
  fdcId: number;
  description: string;
  brandOwner: string;
  foodNutrients: {
    description: string;
    value: number;
    unitName: string;
    name: string;
  }[];
};
