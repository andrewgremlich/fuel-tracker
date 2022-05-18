import { NumberInput } from "./components/number-input";
import { IconButton } from "./components/icon-button";
import { ToasterOven } from "./components/toaster-oven";

import { getById } from "./query";

customElements.define("number-input", NumberInput);
customElements.define("icon-button", IconButton);
customElements.define("toaster-oven", ToasterOven);

document
  .getElementById("search-food-button")
  ?.addEventListener("click", async () => {
    const searchValue = getById("search-food-input") as HTMLInputElement;
    const pageNumber = getById("page-number") as NumberInput;
    const pageSize = getById("page-size") as NumberInput;

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

setTimeout(() => {
  const toasterOven = document.querySelector("toaster-oven");

  if (toasterOven) {
    toasterOven.innerHTML = "<label>Hello World!</label>";
    toasterOven.setAttribute("data-active", "true");
  }
}, 2000);
