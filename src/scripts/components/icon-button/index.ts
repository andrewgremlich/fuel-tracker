import { arrowDown, arrowUp, alarm } from "./icons";

export class IconButton extends HTMLElement {
  icon: string = "";

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            cursor: pointer;
          }
        </style>
        <button></button>
      `;
    }
  }

  static get observedAttributes() {
    return ["icon"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(name, oldValue, newValue);
    if (name === "icon") {
      this.icon = newValue;
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
