import { FoodReturnData } from "models/foods";

import { NumberInput } from "../components/number-input";
import { getById } from "../features/query";

const displayResults = (foodSearchJson: FoodReturnData[]) => {
  const foodResults = document.querySelector("#results");
  const foodResultTemplate = getById(
    "food-result-template"
  ) as HTMLTemplateElement;

  if (foodResults) {
    foodResults.innerHTML = "";
  }

  if (foodResultTemplate) {
    for (let item of foodSearchJson) {
      const foodResultsClone = foodResultTemplate.content.cloneNode(
        true
      ) as HTMLElement;

      foodResultsClone.querySelector(".food-name")!.innerHTML = item.brandOwner;
      foodResultsClone.querySelector(".desc")!.innerHTML = item.description;
      foodResultsClone.querySelector(".calorie-count")!.innerHTML =
        item.foodNutrients
          .find((nutrient) => nutrient.unitName === "KCAL")
          ?.value.toString() ?? "";

      foodResults?.appendChild(foodResultsClone);
    }
  }
};

export const searchResults = async () => {
  const searchValue = getById("search-food-input") as HTMLInputElement;
  const pageNumber = getById("page-number") as NumberInput;
  const pageSize = getById("page-size") as NumberInput;

  if (!searchValue.value) {
    return;
  }

  const foodSearchData = await fetch(
    `http://localhost:8888/.netlify/functions/search?${new URLSearchParams({
      query: searchValue?.value,
      pageNumber: pageNumber?.number.toString(),
      pageSize: pageSize?.number.toString(),
    }).toString()}`
  );
  const foodSearchJson: FoodReturnData[] = await foodSearchData.json();

  displayResults(foodSearchJson);
};
