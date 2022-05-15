import { NumberInput } from "./components/number-input";
import { IconButton } from "./components/icon-button";

customElements.define("number-input", NumberInput);
customElements.define("icon-button", IconButton);

document
  .getElementById("search-food-button")
  ?.addEventListener("click", async () => {
    const searchValue = document.getElementById(
      "search-food-input"
    ) as HTMLInputElement;
    const pageNumber = document.getElementById("page-number") as NumberInput;
    const pageSize = document.getElementById("page-size") as NumberInput;

    if (!searchValue.value) {
      return;
    }

    const paramQuerys = {
      query: searchValue?.value,
      pageNumber: pageNumber?.number.toString(),
      pageSize: pageSize?.number.toString(),
    };

    const foodSearchData = await fetch(
      `http://localhost:8888/.netlify/functions/search?${new URLSearchParams(
        paramQuerys
      ).toString()}`
    );
    const foodSearchJson = await foodSearchData.json();

    console.log(foodSearchJson);
  });
