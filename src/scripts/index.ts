import { NumberInput } from "./components/number-input";
import { IconButton } from "./components/icon-button";
import { ToasterOven } from "./components/toaster-oven";

import { searchResults } from "./features/search";
import { calculateBMR } from "./features/bmr-equations";

customElements.define("number-input", NumberInput);
customElements.define("icon-button", IconButton);
customElements.define("toaster-oven", ToasterOven);

calculateBMR();

document
  .getElementById("search-food-area")
  ?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    searchResults();
  });

// how to use toaoster-oven:
//
//   const toasterOven = document.querySelector("toaster-oven");
//   if (toasterOven) {
//     toasterOven.innerHTML = "<label>Hello World!</label>";
//     toasterOven.setAttribute("data-active", "true");
//   }
