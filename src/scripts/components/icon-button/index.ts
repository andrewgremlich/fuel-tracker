import { arrowDown, arrowUp, alarm } from "./icons";
import { styles } from "./style";

export class IconButton extends HTMLElement {
  icon: string = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        ${styles}
        <button></button>
      `;
    }
  }

  static get observedAttributes() {
    return ["icon", "size"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    switch (name) {
      case "icon":
        this.icon = newValue;
        break;
      case "size":
        this.style.setProperty("--size", newValue);
        break;
    }
  }

  attachIcon(icon: string) {
    switch (icon) {
      case "arrow-up":
        return arrowUp;
      case "arrow-down":
        return arrowDown;
      default:
        return `${alarm} no icon found`;
    }
  }

  connectedCallback() {
    const button = this.shadowRoot?.querySelector("button");

    if (button) {
      button.innerHTML = this.attachIcon(this.icon);
    }
  }
}
