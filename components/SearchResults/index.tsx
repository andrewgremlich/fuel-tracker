import { FC } from "react";

import { FoodItem } from "models/foods";

import styles from "./styles.module.css";

type SearchResultsProps = {
  searchResults: FoodItem[];
  addToKcal: (kcal: number) => void;
};

export const SearchResults: FC<SearchResultsProps> = ({
  searchResults,
  addToKcal,
}) => (
  <div className={`${styles["search-results"]}`}>
    {searchResults.map((food) => {
      const kcal = food.foodNutrients.find(
        (nutrient) => nutrient.unitName === "KCAL"
      )?.value;

      return (
        <div key={food.fdcId} onClick={() => addToKcal(kcal ?? 0)}>
          <p>{food.brandName}</p>
          <p>{food.brandOwner}</p>
          <p>{food.description}</p>
          <p>{kcal} kcal</p>
        </div>
      );
    })}
  </div>
);
