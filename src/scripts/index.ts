import { NumberInput } from "./components/number-input";
import { IconButton } from "./components/icon-button";

customElements.define("number-input", NumberInput);
customElements.define("icon-button", IconButton);

document.getElementById("search-food-button")?.addEventListener("click", () => {
  const pageNumber = document.getElementById("page-number") as NumberInput;
  const pageSize = document.getElementById("page-size") as NumberInput;

  console.dir(pageNumber?.number);
  console.dir(pageSize?.number);
});
