import { FC } from "react";

import { FoodItem } from "models/foods";

type SearchResultsProps = {
  searchResults: FoodItem[];
};

export const SearchResults: FC<SearchResultsProps> = ({ searchResults }) => (
  <div>
    {searchResults.map((food) => (
      <div key={food.id}>
        <p>{food.brandName}</p>
      </div>
    ))}
  </div>
);
