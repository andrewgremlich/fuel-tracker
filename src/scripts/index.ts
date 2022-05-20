import { NumberInput } from "./components/number-input";
import { IconButton } from "./components/icon-button";
import { ToasterOven } from "./components/toaster-oven";

import { searchResults } from "./search";

customElements.define("number-input", NumberInput);
customElements.define("icon-button", IconButton);
customElements.define("toaster-oven", ToasterOven);

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
